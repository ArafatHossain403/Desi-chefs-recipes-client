import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="warning">
          <Container>
            <Navbar.Brand className="font-weight-bold" href="/">
             <h2>Desi Chef Recipes </h2> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#pricing">Blog</Nav.Link>
                <Nav.Link href="#pricing">Chefs</Nav.Link>
              </Nav>
              <Nav>
              <Nav.Link height={20} href=""><CgProfile/></Nav.Link>
                <Nav.Link href=""><Button variant="secondary">Log in</Button></Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
