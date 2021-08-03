import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Container } from 'react-bootstrap';
export const Header = () => {
    return (
        <header>
            {/* <div className="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                <Link to='/' class="navbar-brand">MovieFlix</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' >Watch List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/home' >Homepage</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/watched' >Watched</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/add' >Add</Link>
                        </li>
                     </ul>
                     </div>
                     </div>
                </div> */}
                <Navbar variant="dark" expand="lg" className="navigation">
                    <Container>
                        <Navbar.Brand className="brand" > <Link to='/' style={{fontSize: "45px"}}>WebFlix</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:"#438ec8"}} />
                        <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto navTabs">
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
