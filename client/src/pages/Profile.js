import React, {useState, useEffect} from "react";
import {useAuth} from '../contexts/authContext'
import {useHistory} from 'react-router-dom'
import API from '../utils/API'
import NavBar from "../components/Navbar"


function Profile(props) {
  const {currentUser} = useAuth()
  const [currentUserTrips, setCurrentUserTrips] = useState([])
  const history = useHistory();

  useEffect (() => {
    console.log("in profiles.js")
    console.log(currentUser.email)
    API.getTrips(currentUser.email)
    .then(trips => {
      setCurrentUserTrips(trips.data)
      console.log(currentUserTrips)
    })
  },[] )

  async function handleSubmit(e)  {
    e.preventDefault()
    // await setCurrentTrip(e.currentTarget.value)
    // if(currentTrip)
    {history.push('/itinerary/' + e.currentTarget.value )}
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
            <div className="media text-muted pt-3">
          <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <button onClick={handleSubmit} value={trip._id}>
            <strong className="d-block text-gray-dark">
             <h4>{trip.tripName}</h4>
              </strong>
            <strong className="d-block text-gray-dark">{trip.destination}  ({trip.startDate}) - {trip.endDate})</strong>
            </button>
          </div>
          </div>)
         })
        ) : (<h3>No Trips Available</h3>) 
        } 
        <h6 className="d-block mt-3">
          <a href="#">+ Add Trip</a>
        </h6>
      </div>
    </main>
        </div>

    );
  }

  export default Profile;