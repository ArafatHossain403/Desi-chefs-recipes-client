import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="warning">
          <Container>
            <Navbar.Brand href="#home">Desi Chef Recipes</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Blog</Nav.Link>
                <Nav.Link href="#pricing">Chefs</Nav.Link>
              </Nav>
              <Nav>
              <Nav.Link href="">profile</Nav.Link>
                <Nav.Link href=""><Button variant="success">Log in</Button></Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
