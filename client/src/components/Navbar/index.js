import React, {useState} from "react";
import "./style.css";
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
<nav className="navbar-collapse navbar-light bg-light">
<div className="p-3">
<h2 className="text-center display-6"><img src="./images/Logo.png" width="50" height="50" className="d-inline-block mb-2 mr-1" alt=""/><Link style={{ color: '#000', textDecoration: 'none' }} to="/">Tripster</Link></h2>      
</div>
<div className="text-center text-white" id="contact-me">
        <div className="container">
            <a
              className="btn btn-link btn-floating btn-lg text-secondary m-1"
              role="button"
              data-mdb-ripple-color="dark"
              ><button type="button" className="btn btn-color btn-primary"><Link style={{ color: '#fff', textDecoration: 'none' }} to="/signup">Signup</Link></button></a>
            <a
              className="btn btn-link btn-floating btn-lg text-secondary m-1"
              role="button"
              data-mdb-ripple-color="dark"
              ><button type="button" className="btn btn-color btn-primary"><Link style={{ color: '#fff', textDecoration: 'none' }} to="/login">Login</Link></button></a>
            <a
              className="btn btn-link btn-floating btn-lg text-secondary m-1"
              role="button"
              data-mdb-ripple-color="dark"
              ><button type="button" className="btn btn-color btn-primary"><Link style={{ color: '#fff', textDecoration: 'none' }} to="/profile">Profile</Link></button></a>
            <a
              className="btn btn-link btn-floating btn-lg text-secondary m-1"
              role="button"
              data-mdb-ripple-color="dark"
              ><button type="button" className="btn btn-color btn-primary"><Link style={{ color: '#fff', textDecoration: 'none' }} to="/addtrip">New Trip</Link></button></a>
        </div>
      </div>
</nav>

    {/* <Navbar bg="light" expand="lg">
      <Navbar.Brand><Link to="/">Tripster</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item >{currentUser ? currentUser.email :<Link to="/signup">Sign Up</Link>}</NavDropdown.Item>
            {currentUser ? <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item> :<Link to="/login">Log In</Link>} */}
            {/* <NavDropdown.Item >Profile</NavDropdown.Item>
            <NavDropdown.Item >Create a New Trip</NavDropdown.Item>
            <NavDropdown.Divider /> */}
          {/* </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar> */}
  </div>
    );
  }

  export default NavBar;