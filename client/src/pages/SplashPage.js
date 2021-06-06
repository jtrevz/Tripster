import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavBar from "../components/Navbar"

function SplashPage(props) {
    return (
        <div class="fade">
            <NavBar/>
            {/* <button type="button" className="btn btn-light"><Link to="/login">Login</Link></button>
            <button type="button" className="btn btn-light"><Link to="/signup">Signup</Link></button>
            <button type="button" className="btn btn-light"><Link to="/Itinerary">Itinerary</Link></button>
            <button type="button" className="btn btn-light"><Link to="/trip-planner">Trip Planner</Link></button>
            <button type="button" className="btn btn-light"><Link to="/profile">Profile</Link></button> */}

            <div className="jumbotron btn-color">
                <h1 className="display-4"><img src="./images/logo-white.png" width="80" height="80" className="d-inline-block mb-2 mr-1" alt=""/>Hello, Traveler!</h1>
                <p className="lead">Tripster is an easy way to plan and keep track of your trips.</p>
                <hr className="my-4"/>
                <a className="btn btn-primary btn-color btn-lg" href="#" role="button"><Link style={{ color: '#fff', textDecoration: 'none' }} to="/signup">Get Started</Link></a>
            </div>

            <div id="project">
      <div className="container px-4 py-5" id="custom-cards">
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className=" bg-img projectcard card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url("./images/airport.jpg")`}}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <a><h2 className="pt-5 mt-5 mb-4 display-6 lh-1 textshadow">Track Flights</h2></a>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small className="textshadow lead">Easily track flights with real time data.</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    
          <div className="col">
            <div className="bg-img projectcard card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url('./images/road.jpg')`}}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <a><h2 className="pt-5 mt-5 mb-4 display-6 lh-1 textshadow">Packing List</h2></a>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small className="lead textshadow">Create a packing list to easily keep track of your items.</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    
          <div className="col">
            <div className="bg-img projectcard card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url('./images/beach.jpg')`}}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <a><h2 className="pt-5 mt-5 mb-4 display-6 lh-1 textshadow">Itinerary</h2></a>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small className="lead textshadow">Keep track of your trip with a customizable itinerary.</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        </div>

    );
  }

  export default SplashPage;