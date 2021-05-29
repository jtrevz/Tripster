import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import "./style.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { Link, useHistory } from "react-router-dom"
import { useAuth } from '../contexts/authContext'
import Alert from 'react-bootstrap/Alert';


function NavBar(props) {

  const [error, setError] = useState('');
  const {currentUser, logout}= useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('') 

    try {
      await logout()
      history.push('/login')
    } catch{
      console.log('Failed to log out');
    }
  }

  return (
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">{currentUser.email}</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Create a New Trip</NavDropdown.Item>
            <NavDropdown.Divider />
            {}
            <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>Sign Out</NavDropdown.Item>
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