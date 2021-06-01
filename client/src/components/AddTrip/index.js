import React, {useRef, useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import { useAuth } from '../../contexts/authContext'
import TripContext from '../../contexts/AddTrip'
import API from '../../utils/API'


function AddTrip () {
    const tripNameRef = useRef()
    const cityRef = useRef()
    const startDateRef = useRef()
    const endDateRef = useRef()

    const [error, setError] = useState('');
    const {currentUser} = useAuth();
    const {currentTrip, setCurrentTrip} = useState({})
    const {inputTrip, setInputTrip} = useState({})



    function handleSubmit (e) {
        e.preventDefault();

        if (endDateRef.current.value < startDateRef.current.value) {
            return setError("End date must be after star date")
        }

        setInputTrip ({
            tripName: (tripNameRef.current.value),
            destination: (cityRef.current.value),
            startDate: (startDateRef.current.value),
            endDate: (endDateRef.current.value),
            userEmail: (currentUser.email)
        })

        // API.saveTrip(inputTrip)

        console.log(tripNameRef.current.value);
        console.log(cityRef.current.value)
        console.log(startDateRef.current.value);
        console.log(endDateRef.current.value);
        console.log(inputTrip.current.value);
        return console.log("hi");

        
    }

    return ( 
       <div>
           <div className="container mt-5">
           <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Add Trip</h1>
                {error && <Alert variant= "danger">{error}</Alert>}
                <div className="mb-3">
                    <label className="form-label">Trip Name</label>
                    <input ref={tripNameRef} type="city" className="form-control" placeholder="e.g. Girls Trip Summer 2022" />
                    <div id="destinationHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Destination</label>
                    <input ref={cityRef} type="city" className="form-control" placeholder="e.g. New York, Miami" />
                    <div id="destinationHelp" className="form-text"></div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label  className="form-label"> Start Date</label>
                        <input ref={startDateRef} type="date" className="form-control" id="startDate"/>
                    </div>
                    <div className="col">
                        <label className="form-label"> End Date</label>
                        <input ref={endDateRef} type="date" className="form-control" id="endDate"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>  
            </form>
           </div>
       </div>
    )
}

export default AddTrip;