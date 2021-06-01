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

            <div class="jumbotron">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4"/>
                <a class="btn btn-primary btn-color btn-lg mr-4" href="#" role="button"><Link to="/login">Login</Link></a>
                <a class="btn btn-primary btn-color btn-lg" href="#" role="button"><Link to="/signup">Signup</Link></a>
            </div>

            <div id="project">
      <div class="container px-4 py-5" id="custom-cards">
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <div class=" projectcard card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url("./images/m3-homepage-desktop.jfif")`}}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <a><h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold textshadow">Electrapoint</h2></a>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small class="textshadow">A website that helps you find Electric Vehicle charge stations near you.</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    
          <div class="col">
            <div class="projectcard card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url('./images/photo-1486312338219-ce68d2c6f44d.jfif')`}}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <a><h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold textshadow">FreelancR</h2></a>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small class="textshadow">A website that lets Freelancers find jobs that clients post </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: `url('./images/06r3O9TGIbCXQhR7C69f1vE-10..1617039239.jpg')`}}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <a><h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold textshadow">Password Generator</h2></a>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"></svg>
                    <small>A random password generator</small>
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