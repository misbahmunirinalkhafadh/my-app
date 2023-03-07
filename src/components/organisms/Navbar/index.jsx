import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar key="md" bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="/home">Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <NavDropdown
                  title="Services"
                  id="offcanvasNavbarDropdown-expand-md">
                  <NavDropdown.Item href="/services">Service 1</NavDropdown.Item>
                  <NavDropdown.Item href="/services">Service 2</NavDropdown.Item>
                  <NavDropdown.Item href="/services">Service 3</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Button variant="outline-primary" className="me-2">
                  Login
                </Button>
                <Button variant="primary">Register</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
