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

            <div className="jumbotron">
                <h1 className="display-4">Hello, Placeholder!</h1>
                <p className="lead">This is a simple placeholder unit, a simple placeholdy-style component for calling extra attention to placeholder content or placeholders.</p>
                <hr className="my-4"/>
                <a className="btn btn-primary btn-color btn-lg mr-4" href="#" role="button"><Link to="/login">Login</Link></a>
                <a className="btn btn-primary btn-color btn-lg" href="#" role="button"><Link to="/signup">Signup</Link></a>
            </div>

            <div id="project">
      <div className="container px-4 py-5" id="custom-cards">
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className=" projectcard card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url("./images/airport.jpg")`}}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <a><h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold textshadow">Placeholder</h2></a>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small className="textshadow">Another placeholder.</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    
          <div className="col">
            <div className="projectcard card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url('./images/airport-screen.png')`}}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <a><h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold textshadow">Placeholder</h2></a>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small className="textshadow">Another placeholder.</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    
          <div className="col">
            <div className="projectcard card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url('./images/beach.jpg')`}}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <a><h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold textshadow">Placeholder</h2></a>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small className="textshadow">Another placeholder.</small>
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