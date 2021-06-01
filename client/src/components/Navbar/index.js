import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import "./style.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../../contexts/authContext'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./style.css"



function NavBar() {
  const {currentUser, logout}= useAuth();
  const history = useHistory();

  async function handleLogout() {

    try {
      await logout()
      history.push('/login')
    } catch{
      console.log('Failed to log out');
    }
  }

  return (
  <div>


<nav class="navbar-collapse navbar-light bg-light">
<div className="p-3">
<h2 className="text-center display-6"><img src="./images/Logo.png" width="50" height="50" class="d-inline-block mb-2 mr-1" alt=""/>Tripster</h2>      
</div>
</nav>
<nav class="stroke">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Downloads</a></li>
      <li><a href="#">More</a></li>
      <li><a href="#">Nice staff</a></li>
    </ul>
  </nav>



    <Navbar bg="light" expand="lg">
      <Navbar.Brand><Link to="/">Tripster</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item >{currentUser ? currentUser.email :<Link to="/signup">Sign Up</Link>}</NavDropdown.Item>
            {currentUser ? <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item> :<Link to="/login">Log In</Link>}
            {/* <NavDropdown.Item >Profile</NavDropdown.Item>
            <NavDropdown.Item >Create a New Trip</NavDropdown.Item>
            <NavDropdown.Divider /> */}
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </div>
    );
  }

  export default NavBar;