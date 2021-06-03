import React from "react";


function Itinerary(props) {

    function handleChange() {

    }
    return (
        <div>
           <div className="container mt-5">
           <form>
                <h1 className="h3 mb-3 fw-normal">Chicago 2021</h1>
                <div className="mb-3">
                    <label className="form-label">Event</label>
                    <input onChange={handleChange} name="tripName" type="city" className="form-control" placeholder="" />
                    <div id="destinationHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                        <label  className="form-label">Date</label>
                        <input onChange={handleChange} name="startDate" type="date" className="form-control" id="startDate"/>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label  className="form-label">Start Time</label>
                        <input onChange={handleChange} name="startDate" type="time" className="form-control" id="startDate"/>
                    </div>
                    <div className="col">
                        <label className="form-label">End Time</label>
                        <input onChange={handleChange} name="endDate" type="time" className="form-control" id="endDate"/>
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Notes</label>
                    <input onChange={handleChange} name="destination" type="text" className="form-control" placeholder="e.g. Reservations under John Smith, dress code enforced" />
                    <div id="destinationHelp" className="form-text"></div>
                </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>  
            </form>
           </div>
       </div>
    );
  }

  export default Itinerary;