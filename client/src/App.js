import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Switch} from "react-router-dom";
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import SplashPage from "./pages/SplashPage"

function App() {
  return (
    <Router>
    <div>
      <NavBar/>
      <Switch>
      <Route exact path="/" component={SplashPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;