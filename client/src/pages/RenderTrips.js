import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const RenderTrips = () => {

    const [trips, setTrips] = useState([]);


  // Load all the existing trips that the user has created
  useEffect(() => {
    loadTrips();
  }, [])

  const loadTrips = () => {
    API.getTrips()
    .then(res => 
      setTrips(res.data)
    )
    .catch(err => console.log(err));
  }

  const handleDeleteTrip = (id) => {
    console.log(id);
    API.deleteTrip(id)
      .then(res => loadTrips())
      .catch(err => console.log(err));
  }


    return (
    <div>
      <Table striped bordered hover>
        <thead>
            <tr>
              <th>TripName</th>
              <th>Destination</th>
              <th>Airline</th>
            </tr>
        </thead>
        <tbody>
          {trips.map(trip => (
              <tr key={trip._id}>
                <td>
                  {trip.tripName}
                </td>
                <td>
                  {trip.destination}
                </td>
                <td>
                  Southwest Airlines
                </td>
                <td>
                  <Button variant="primary" onClick={() => handleDeleteTrip(trip._id)}>Delete</Button>                
                </td>
              </tr>
          ))}
        </tbody>
      </Table>

    </div>
    )

  
}

export default RenderTrips;




