import React, {useState, useEffect} from "react"; 
import API from '../utils/API'
import './itinerary.css'
import NavBar from '../components/Navbar'
import moment from 'moment';
import Alert from 'react-bootstrap/Alert';
import {useHistory} from 'react-router-dom'


function Itinerary() {
    const [currentTrip, setCurrentTrip] = useState();
    const [event, setEvent] = useState();
    const [days, setDays]= useState();
    const history = useHistory()


    var temp = (window.location.pathname).split('/')
    
    useEffect(() => {
        var temp = (window.location.pathname).split('/')
        API.getTrip(temp[2])
        .then(trip => {
            setCurrentTrip(trip.data)
            console.log(trip.data)
            // var dateArr = getDateArray(trip.startDate, trip.endDate)
             
    
        })
    },[])

    function handleChange(e) {
        const {name, value} = e.target;
        setEvent(prevState =>({
            ...prevState,
            [name]:value
        }))
        console.log(event)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(event)
        console.log(temp[2])
        API.updateTrip(temp[2], event)
        .then(updatedTrip => {
            var frm = document.querySelector("#itineraryForm");
            frm.submit();
            frm.reset();
        })
    }

    return (
        <div>
        <NavBar/>
           <div className="container mt-5 fade"></div> 
            {days && (days.map(day => {
                return(
                    <p>{day}</p>
                )
            }))}
            {days && (<p>{days}</p>)}
            <div className="container mt-5">
           {currentTrip && <h1 className="h3 mb-3 fw-normal">{currentTrip.tripName}</h1>}
           <ul className="eventList">
                {currentTrip ? (currentTrip && (
                currentTrip.events.map(event =>{
                    return(
                       <div>
                           
                        <li style={{margin:"none"}} className="eventBullet" key={event._id}>
                            <div className="eventName">{event.eventName}</div>
                            <p className="eventDate">{moment(event.eventDate).format('dddd, MMMM Do')}</p>
                            <p className="eventTime">{event.time}</p>
                            <p className="eventNotes">{event.notes}</p>
                        </li>
                        </div> 
                    )
                }))) : <Alert variant= "primary">Rendering Trip Information</Alert>} 
            </ul> 
            </div>
           <div className="container mt-5">
           <h1 className="h3 mb-3 fw-normal">Add Trip</h1>
    <form onSubmit={handleSubmit} id="itineraryForm">
                <div className="mb-3">
                    <label className="form-label">Event</label>
                    <input onChange={handleChange} name="eventName" type="city" className="form-control" placeholder="" />
                    <div id="destinationHelp" className="form-text"></div>
                </div>
                <div className="mb-3 row">
                <div className="col">
                        <label className="form-label">Date</label>
                        <input onChange={handleChange} name="eventDate" type="date" className="form-control" id="date"/>
                    </div>
                    <div className="col">
                        <label  className="form-label">Time</label>
                        <input onChange={handleChange} name="time" type="time" className="form-control" id="time"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Notes</label>
                    <input onChange={handleChange} name="notes" type="text" className="form-control" placeholder="e.g. Reservations under John Smith, dress code enforced" />
                    <div id="destinationHelp" className="form-text"></div>
                </div>
                <button type="submit" className="btn btn-primary btn-color">Submit</button>  
            </form>
           </div>
       </div>
    );
  }

  export default Itinerary;