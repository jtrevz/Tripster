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
            <button className=" pt-1 pb-1 rounded btn-color ml-5" onClick={() => generatePDF(trip)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-earmark-pdf" viewBox="0 0 16 16">
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
  <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"/>
</svg></button>
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