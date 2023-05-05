import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";



const Header = () => {
  const {user, logout} =  useContext(AuthContext); 
  const handleLogout = () =>{
    logout()
    .then()
    .catch(error => console.log(error));
  }

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
                <Nav.Link className="fw-semibold" href="/">Home</Nav.Link>
                <Nav.Link className="fw-semibold" href="/blog">Blog</Nav.Link>
                <Nav.Link className="fw-semibold" href="/">Chefs</Nav.Link>
                
              </Nav>
              <Nav>
              <Nav.Link height={20} href=""><FaUserCircle/>{user}</Nav.Link>
               <div>
               { user ? 
                  <Button onClick={handleLogout} variant="secondary">Logout</Button> :
                  <Button variant="secondary"><Link  className="text-decoration-none text-warning" to={"/login"}>Login</Link></Button>
                  }
                
               </div>
                  
                  
                  
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
