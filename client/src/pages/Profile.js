import React, {useState, useEffect} from "react";
import {useAuth} from '../contexts/authContext'
import API from '../utils/API'

function Profile(props) {
  const {currentUser} = useAuth()
  const [currentUserTrips, setCurrentUserTrips] = useState([])

  useEffect(() => {
    console.log("in profiles.js")
    console.log(currentUser.email)
    API.getTrips(currentUser.email)
    .then(trips =>
      console.log(trips))
  })

    return (
      <div>
      <main role="main" className="container">
      <div className="my-3 p-3 bg-white rounded box-shadow">
        <h6 className="border-bottom border-gray pb-2 mb-0">All Trips</h6>
        <div className="media text-muted pt-3">
          <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong className="d-block text-gray-dark">
              <h4>Summer 2021</h4>
              </strong>
            <strong className="d-block text-gray-dark">Houston  (6/12 - 6/30)</strong>
          </div> 
        </div>
        <h6 className="d-block mt-3">
          <a href="#">+ Add Trip</a>
        </h6>
      </div>
    </main>
        </div>

    );
  }

  export default Profile;