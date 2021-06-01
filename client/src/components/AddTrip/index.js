import React, {useRef, useState} from 'react';
import Alert from 'react-bootstrap/Alert';

function AddTrip () {
    const tripNameRef = useRef()
    const cityRef = useRef()
    const startDateRef = useRef()
    const endDateRef = useRef()
    const [error, setError] = useState('');
    const [tripObject, setTripObject] = useState({})

    function handleSubmit (e) {
        e.preventDefault();

        if (endDateRef.current.value < startDateRef.current.value) {
            return setError("End date must be after star date")
        }

        console.log(tripNameRef.current.value);
        console.log(cityRef.current.value)
        console.log(startDateRef.current.value);
        console.log(endDateRef.current.value);
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