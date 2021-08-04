import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Container } from 'react-bootstrap';
export const Header = () => {
    return (
        <header>
                <Navbar variant="dark" expand="lg" className="navigation">
                    <Container>
                        <Navbar.Brand className="brand" > <Link to='/' style={{fontSize: "45px"}}>WebFlix</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:"#438ec8"}} />
                        <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto" style={{marginLeft:"40%",fontWeight:600}}>
                            <Nav.Link > <Link to='/Webflix' >Home</Link></Nav.Link>
                            <Nav.Link ><Link to='/Webflix/watchlist' >Watchlist</Link></Nav.Link>
                            <Nav.Link ><Link to='/Webflix/watched' >Watched</Link></Nav.Link>
                            <Nav.Link ><Link to='/Webflix/add'>Search</Link></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </header>
    )
}
