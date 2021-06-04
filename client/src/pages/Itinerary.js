import React, {useState, useEffect} from "react"; 
import API from '../utils/API'
import NavBar from '../components/Navbar'

function Itinerary() {
    const [currentTrip, setCurrentTrip] = useState({});
    const [event, setEvent] = useState();
    var temp = (window.location.pathname).split('/')
    
    useEffect(() => {
        var temp = (window.location.pathname).split('/')
        API.getTrip(temp[2])
        .then(trip => {
            setCurrentTrip(trip.data)
            console.log(trip.data)
        })
        console.log(currentTrip)
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
            setCurrentTrip(updatedTrip)
        })
    }

    return (
        <div>
            <NavBar/>
           <div className="container mt-5 fade">
    <form onSubmit={handleSubmit}>
        {currentTrip && <h1 className="h3 mb-3 fw-normal">{currentTrip.tripName}</h1>}
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