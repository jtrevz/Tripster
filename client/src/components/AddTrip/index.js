import React, {useRef, useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import { useAuth } from '../../contexts/authContext'
import TripContext from '../../contexts/TripContext'
import API from '../../utils/API'


function AddTrip () {
    const [error, setError] = useState('');
    const {currentUser} = useAuth();
    const [currentTrip, setCurrentTrip] = useState({})
    const [inputTrip, setInputTrip] = useState({})


    function handleChange (e) {
        const { name, value } = e.target ;
        setInputTrip(prevState =>({ 
            ...prevState,
            [name]: value
        }))
        console.log(inputTrip)
    }



    // function  handleSubmit (e) {
    //     e.preventDefault();

    //     if (endDateRef.current.value < startDateRef.current.value) {
    //         return setError("End date must be after start date")
    //     }


    //     // API.saveTrip(inputTrip)


        
    // }

    return ( 
       <div>
           <div className="container mt-5">
           <form>
                <h1 className="h3 mb-3 fw-normal">Add Trip</h1>
                {error && <Alert variant= "danger">{error}</Alert>}
                <div className="mb-3">
                    <label className="form-label">Trip Name</label>
                    <input onChange={handleChange} value='tripName' type="city" className="form-control" placeholder="e.g. Girls Trip Summer 2022" />
                    <div id="destinationHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Destination</label>
                    <input onChange={handleChange} value="destination" type="city" className="form-control" placeholder="e.g. New York, Miami" />
                    <div id="destinationHelp" className="form-text"></div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label  className="form-label"> Start Date</label>
                        <input onChange={handleChange} value="startDate" type="date" className="form-control" id="startDate"/>
                    </div>
                    <div className="col">
                        <label className="form-label"> End Date</label>
                        <input onChange={handleChange} value="endDate" type="date" className="form-control" id="endDate"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>  
            </form>
           </div>
       </div>
    )
}

export default AddTrip;