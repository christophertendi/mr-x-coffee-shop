import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navbarz() {
  return (
    <Navbar bg="success" expand="sm">
        <Navbar.Brand className ="ms-3 text-white" as={Link} to = "/">
          <h1 className="display-5">Submit It</h1>
        </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/profile">
          <div className="lead fs-4 ">Profile</div>
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
