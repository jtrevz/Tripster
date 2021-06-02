import React, {useRef, useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import { useAuth } from '../../contexts/authContext'
import API from '../../utils/API'


function AddTrip () {
    const [error, setError] = useState('');
    const {currentUser} = useAuth();
    const [currentTrip, setCurrentTrip] = useState()
    const [inputTrip, setInputTrip] = useState({})



    function handleChange (e) {
        const { name, value } = e.target ;
        setInputTrip(prevState =>({ 
            ...prevState,
            [name]: value
        }))
        console.log(inputTrip)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputTrip.endDate < inputTrip.startDate) {
            return setError("End date must be after start date")
        }

        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 

        if(mm<10) 
        {
            mm='0'+mm;
        } 

        today = yyyy+'-'+mm+'-'+dd

        console.log(today);
        if (today > inputTrip.startDate) {
           return setError('Invalid start date') 
        }

        console.log("In handleSaveTrip()");
        setInputTrip(prevState=> ({
            ...prevState,
            userEmail: currentUser.email
         }))

        console.log(currentUser);

        console.log(inputTrip);

        API.saveTrip({
            tripName: inputTrip.tripName,
            destination: inputTrip.destination,
            startDate: inputTrip.startDate,
            endDate: inputTrip.endDate,
            userEmail: currentUser.email,
        })
        .then(res => {
            console.log(res.data._id);
            setCurrentTrip(res.data._id)
        }) 
        .catch(err => console.log(err));
    }

    return ( 
       <div>
           <div className="container mt-5">
           <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Add Trip</h1>
                {error && <Alert variant= "danger">{error}</Alert>}
                <div className="mb-3">
                    <label className="form-label">Trip Name</label>
                    <input onChange={handleChange} name="tripName" type="city" className="form-control" placeholder="e.g. Girls Trip Summer 2022" />
                    <div id="destinationHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Destination</label>
                    <input onChange={handleChange} name="destination" type="city" className="form-control" placeholder="e.g. New York, Miami" />
                    <div id="destinationHelp" className="form-text"></div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label  className="form-label"> Start Date</label>
                        <input onChange={handleChange} name="startDate" type="date" className="form-control" id="startDate"/>
                    </div>
                    <div className="col">
                        <label className="form-label"> End Date</label>
                        <input onChange={handleChange} name="endDate" type="date" className="form-control" id="endDate"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>  
            </form>
           </div>
       </div>
    )
}

export default AddTrip;