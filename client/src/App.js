import React from "react";
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import Signup from "./pages/Signup.js"

function App() {
  return (
    <div>
      <NavBar/>
      <Signup/>
      <Footer/>
    </div>
  );
}

export default App;