import React from 'react'

import { Container,Nav,Navbar } from 'react-bootstrap';

export default function navbar() {
  return (
    <Navbar sticky="top"  bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/todo">To Do</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

