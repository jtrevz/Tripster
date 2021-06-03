import moment from 'moment';
import { set } from 'mongoose';
import React, {useRef, useState, useEffect} from 'react';
import Alert from 'react-bootstrap/Alert';
import { useAuth } from '../../contexts/authContext'
import API from '../../utils/API';
import FlightAPI from "../../utils/FlightAPI";
// import FlightData from "./FlightData";


function AddTrip () {
    const [error, setError] = useState('');
    const {currentUser} = useAuth();
    const [currentTrip, setCurrentTrip] = useState()
    const [inputTrip, setInputTrip] = useState({})
    const [airlines, setAirlines] = useState([]);
    const [confirm, setConfirm] = useState(false);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");

    useEffect(() => {
        loadAirlines();
   
      }, [])


    let loadAirlines = async => {
    console.log("I'm in loadAirlines");
    API.getAirlines()
        .then(res => {
        console.log(res.data);
        setAirlines(res.data);
        return res.data;
        })
        .catch(err => console.log(err));
    };


    function handleChange (e) {
        const { name, value } = e.target ;
        setInputTrip(prevState =>({ 
            ...prevState,
            [name]: value
        }))
        console.log(inputTrip)
        setConfirm(false);
    }



    const handleFlightEntry = () => {
        console.log("I'm in handleFlightEntry");
        console.log("flightNum = " + inputTrip.departureFlightlightNumber);
        console.log("airlineCode = " + inputTrip.airlineCode);
        console.log("flightDate = " + inputTrip.startDate);
        FlightAPI.getFlightData(inputTrip.departureFlightNumber, inputTrip.airlineCode, inputTrip.startDate)
            .then(res => {
                console.log(res.data);
                console.log(res.data[0].arrival.airport.name);
                setMessage1("Departing Flight: " + res.data[0].airline.name + " Airlines " + "Flight: " + 
                    res.data[0].number + " departing at " + moment(res.data[0].departure.scheduledTimeLocal).format('MM-DD-YYYY h:mm a') + 
                    " from " + res.data[0].departure.airport.municipalityName + 
                    "(" + res.data[0].departure.airport.iata + ") " + " to " +
                    " to " + res.data[0].arrival.airport.municipalityName + 
                            "(" + res.data[0].arrival.airport.iata + ") ");
            })
            .then (res => {
                FlightAPI.getFlightData(inputTrip.returnFlightNumber, inputTrip.airlineCode, inputTrip.endDate)
                .then(res => {
                    console.log(res.data);
                    console.log(res.data[0].arrival.airport.name);
                    setMessage2("Return Flight: " + res.data[0].airline.name + " Airlines " + "Flight: " + 
                    res.data[0].number + " departing at " + moment(res.data[0].departure.scheduledTimeLocal).format('MM-DD-YYYY h:mm a') + 
                    " from " + res.data[0].departure.airport.municipalityName + 
                    "(" + res.data[0].departure.airport.iata + ") " + " to " +
                    " to " + res.data[0].arrival.airport.municipalityName + 
                            "(" + res.data[0].arrival.airport.iata + ") ");
                })
                .catch (err => {
                    console.log(err);
                    setMessage1("Please Verify Flight Data");
                    const timer = setTimeout(() => {
                        setMessage1("")
                        setConfirm(false);
                    }, 3000 );
                    return () => clearTimeout(timer);
                })                
            })
            .catch (err => {
                console.log(err);
                setMessage1("Please Verify Flight Data");
                const timer = setTimeout(() => {
                    setMessage1("")
                    setConfirm(false);
                }, 3000 );
                return () => clearTimeout(timer);
            })
    }    


    function confirmData (e) {
        e.preventDefault();
        console.log("I'm in confirmData");
        if (inputTrip.airlineCode && inputTrip.departureFlightNumber &&
            inputTrip.startDate && inputTrip.returnFlightNumber &&
            inputTrip.endDate) {
            
            handleFlightEntry();
            setConfirm(true);
        } else {
            setMessage1("Please Verify Your Flight Data");
            const timer = setTimeout(() => {
                setMessage1("")
                setConfirm(false);
            }, 3000 );
            return () => clearTimeout(timer);
        };
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirm(false);

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
            airlineCode: inputTrip.airlineCode,
            departureFlightNumber: inputTrip.departureFlightNumber,
            returnFlightNumber: inputTrip.returnFlightNumber
        })
        .then(res => {
            console.log(res.data._id);
            setCurrentTrip(res.data._id);
        }) 
        .catch(err => console.log(err));

    
        setMessage1("Trip Information Saved Successfuly");
        setMessage2("");
        const timer = setTimeout(() => {
            setMessage1("")
            setConfirm(false);
            var frm = document.querySelector("#trip-form");
            frm.submit();
            frm.reset();
        }, 3000 );
        return () => clearTimeout(timer);


 
    }

    return ( 
       <div>
           <div className="container mt-5">
           <form id="trip-form" onSubmit={confirm ? handleSubmit : confirmData }>
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
                        <label  className="form-label">Airline</label>
                        {airlines.length ? (
                            <div> 
                                <select name="airlineCode" className="form-select" onChange={handleChange}>
                                    <option>Select Airline</option>
                                    {airlines.map(airline => {
                                        return (<option key={airline._id} value={airline.airlineCode}>{airline.airlineName}</option>
                                    )})}
                                </select>
                            </div>  ) : <div>""</div> }
                    </div>
                </div>          
                <div className="mb-3 row">
                    <div className="col-3">
                        <label  className="form-label"> Departure Date</label>
                        <input onChange={handleChange} name="startDate" type="date" className="form-control" id="startDate"/>
                    </div>
                    <div className="col-3">
                        <label  className="form-label">Departing Flight</label>
                        <input onChange={handleChange} name="departureFlightNumber" className="form-control" id="startDate"/>
                    </div>
                    <div className="col-3">
                        <label className="form-label"> Return Date</label>
                        <input onChange={handleChange} name="endDate" type="date" className="form-control" id="endDate"/>
                    </div>
                    <div className="col-3">
                        <label  className="form-label">Return Flight</label>
                        <input onChange={handleChange} name="returnFlightNumber" className="form-control" id="startDate"/>
                    </div>
                </div>
                <div className="row">
                   {(message1.length > 0) && <div className="alert alert-primary" role="alert">{message1}</div> }
                   {(message2.length > 0) && <div className="alert alert-primary" role="alert">{message2}</div> }
                </div>
                <div className="row">
                    <div className="text-center">
                        {confirm && 
                        <button type="submit" className="btn btn-success px-4">Submit</button>  
                        }
                        {!confirm &&
                        <button type="submit" className="btn btn-primary px-4">Confirm</button>                  
                        }
                    </div>

                </div>
            </form>
           </div>
       </div>
    )
}

export default AddTrip;