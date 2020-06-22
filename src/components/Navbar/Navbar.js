import React from "react";
//import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.css";
import "../FontawesomeIcons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="md" className="px-3">
      <LinkContainer to="/#">
        <Navbar.Brand>
          <img
            src="/logoMusic.png"
            alt="app's logo"
            style={{ width: "8vw", cursor: "pointer" }}
          ></img>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav
          className="head_bar"
          style={{ cursor: "pointer", color: "rgb(42, 0, 70)" }}
        >
          <LinkContainer to="/">
            <NavItem className="mr-5">
              <FontAwesomeIcon icon="home"></FontAwesomeIcon> Home
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/playlist">
            <NavItem className="mr-5">
              <FontAwesomeIcon icon="plus-circle"></FontAwesomeIcon> Create
              Playlist
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/featured">
            <NavItem className="mr-5">
              <FontAwesomeIcon icon="music"></FontAwesomeIcon> Recent and New
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/history">
            <NavItem className="mr-5">
              <FontAwesomeIcon icon="history"></FontAwesomeIcon> History
              Playlist
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/user">
            <NavItem className="mr-5">
              <FontAwesomeIcon icon="user"></FontAwesomeIcon> Profile
            </NavItem>
          </LinkContainer>
          <a
            id="out"
            href="http://localhost:3000/"
            style={{ color: "rgb(42, 0, 70)", paddingRight: "3rem" }}
          >
            Log out
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
