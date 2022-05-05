import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo">
            <span style={{color:"red"}}> Laptop</span> Inventory
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              {/* <Nav.Link as={Link} to="/blog">Blog</Nav.Link> */}
              <Nav.Link as={Link} to="/manageInventory">Manage Inventory</Nav.Link>
              <Nav.Link as={Link} to="/addProduct">Add product</Nav.Link>
             
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              {
                user ? 
                  <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>SignOut</button>
                :
              <Nav.Link as={Link} to="/login">
                LogIn
              </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;