import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
              <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
             {
               user? 
               <NavDropdown title="Manage Inventory" id="collasible-nav-dropdown">
               <NavDropdown.Item href="inventory/addProduct">Add product</NavDropdown.Item>
               <NavDropdown.Item href="/inventory/deleteProduct">
                 Delete Product
               </NavDropdown.Item>
               
             </NavDropdown>
               :
               <h2>Nothing</h2>
             }
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