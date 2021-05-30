import React from "react";
import { Link, useLocation } from "react-router-dom";

function SplashPage(props) {
    return (
        <div>
            <button type="button" className="btn btn-light"><Link to="/login">Login</Link></button>
            <button type="button" className="btn btn-light"><Link to="/signup">Signup</Link></button>
            <button type="button" className="btn btn-light"><Link to="/Itinerary">Itinerary</Link></button>
            <button type="button" className="btn btn-light"><Link to="/trip-planner">Trip Planner</Link></button>
            <button type="button" className="btn btn-light"><Link to="/profile">Profile</Link></button>
        </div>

    );
  }

  export default SplashPage;