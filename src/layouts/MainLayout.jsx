import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { css } from '@emotion/react'

const MainLayout = () => {
  return (
    <>
      {/* 🌍 Nav Bar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>ArcGIS React Example</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/map">
                <Nav>Map</Nav>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 🍰 Router Outlet for Main Content Coming from AppRoutes */}
      <Container className="mainContainer">
        <Outlet />
      </Container>
    </>
  );
}

export default MainLayout;
