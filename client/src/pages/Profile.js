import React, {useState, useEffect} from "react";
import {useAuth} from '../contexts/authContext'
import {Link, useHistory} from 'react-router-dom'
import API from '../utils/API'
import FlightAPI from "../utils/FlightAPI";
import jsPDF from 'jspdf'
import logo from './Logo.png';
import NavBar from "../components/Navbar";

const generatePDF = async (trip) => {
  
  try {
    let airPortName = await FlightAPI.getFlightData(trip.departureFlightNumber, trip.airlineCode, trip.startDate)
    let airPortReturn = await FlightAPI.getFlightData(trip.returnFlightNumber, trip.airlineCode, trip.endDate)

    var doc =  new jsPDF();
    doc.setFontSize(18);
    doc.text(88, 8, 'Tripster');
    doc.line(20, 20, 80, 20);
    doc.addImage(logo, 'JPEG', 88, 10, 40, 20, 'NONE', 0);
    doc.line(130, 20, 190, 20);
  
    console.log('airPortName', airPortName.data[0].departure.airport.name)
    doc.setFontSize(12);
    doc.text(20, 65, `Depart: ${airPortName.data[0].departure.airport.name} @ ${airPortName.data[0].departure.scheduledTimeLocal}`);
    doc.text(20, 70, `Flight: ${trip.departureFlightNumber} @ Gate ${airPortName.data[0].departure.terminal}`);
    doc.text(20, 75, `Return: ${airPortReturn.data[0].departure.airport.name} @ ${airPortReturn.data[0].departure.scheduledTimeLocal}`);
    doc.text(20, 80, `Flight: ${trip.returnFlightNumber} @ Gate ${airPortReturn.data[0].departure.terminal}`);


    doc.text(20, 90, `Departing Flight: ${airPortName.data[0].airline.name} Airlines Flight: ${airPortName.data[0].number} departing at ${airPortName.data[0].departure.scheduledTimeLocal} from ${airPortName.data[0].departure.airport.municipalityName}(${airPortName.data[0].departure.airport.iata}) to ${airPortName.data[0].arrival.airport.municipalityName} (${airPortName.data[0].arrival.airport.iata})`);


    doc.text(20, 105, `startDate: ${trip.startDate}`);
    doc.text(20, 110, `endDate: ${trip.endDate}`);
    doc.text(20, 115, `userEmail: ${trip.userEmail}`);
    doc.text(20, 120, `airlineCode: ${trip.airlineCode}`);
    doc.text(20, 125, `departureFlightNumber: ${trip.departureFlightNumber}`);
    doc.text(20, 130, `returnFlightNumber: ${trip.returnFlightNumber}`);
  
    doc.save('itinerary.pdf')

  } catch (error) {
    console.log('generatePDF Error:', error)
  }
}



function Profile(props) {
  const { currentUser } = useAuth()
  const [currentUserTrips, setCurrentUserTrips] = useState([])
  const history = useHistory();

  useEffect(() => {
    API.getTrips(currentUser.email)
      .then(trips => {
        setCurrentUserTrips(trips.data)
        console.log(currentUserTrips)
      })
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    { history.push('/itinerary/' + e.currentTarget.value) }
  }

    return (
      <div>
        <NavBar/>
      <main role="main" className="container fade">
      <div className="my-3 p-3 bg-white rounded box-shadow">
    <h6 className="border-bottom border-gray pb-2 mb-0"></h6>
        {currentUserTrips.length ? (
         currentUserTrips.map(trip => {
          return (
            <div className="media text-muted pt-3 justify-content-center">
          <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray justify-content-center">
          <button className="shadow trip-btn rounded" style={{ color: 'primary', textDecoration: 'none',}} onClick={handleSubmit} value={trip._id}>
            <strong className="d-block text-gray-dark">
             <h4 className="display-6">{trip.tripName}</h4>
              </strong>
            <strong className="lead d-block text-gray-dark">{trip.destination}  ({trip.startDate}) - {trip.endDate})</strong>
            </button>
            <button className="color-btn ml-1" onClick={() => generatePDF(trip)}>Itinerary</button>
          </div>
          </div>)
         })
        ) : (<h3>No Trips Available</h3>) 
        } 
        <h6 className="d-block mt-3">
        <Link style={{ color: 'primary', textDecoration: 'none' }} to="/addtrip">+  Add Trip</Link>
        </h6>
      </div>
    </main>
        </div>
  )
}

export default Profile;