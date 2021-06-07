import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Switch} from "react-router-dom";
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import SplashPage from "./pages/SplashPage"
import { AuthProvider } from "./contexts/authContext"
import PrivateRoute from "./components/PrivateRoute"
import Profile from "./pages/Profile"
import AddTrip from "./components/AddTrip"
import Itinerary from "./pages/Itinerary"
import "./style.css"




function App() {

  return (
      <Router>
        <div>
        <AuthProvider>
            <Switch>
              <Route exact path="/" component={SplashPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/addtrip" component={AddTrip} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute path="/itinerary" component={Itinerary} />
            </Switch>
          <Footer/>
          </AuthProvider>
        </div>
      </Router>
    
  );
}

export default App;