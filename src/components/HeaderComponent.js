import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/cube-48.png";
import logoLight from "../assets/cube-32.png";
import lightSwitch from "../assets/sun-black-32.png";
import darkSwitch from "../assets/moon-black-32.png";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: true,
    };
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode() {
    this.setState(state => ({
      isDarkMode: !this.state.isDarkMode,
    }));
    this.state.isDarkMode
      ? document.documentElement.setAttribute("theme", "light")
      : document.documentElement.removeAttribute("theme");
  }

  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Link to="/home" className="navbar-brand">
          <img
            src={this.state.isDarkMode ? logo : logoLight}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Hangar logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              to="/home"
              className="nav-link"
              activeStyle={{ color: "#f5a540" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard"
              className="nav-link"
              activeStyle={{ color: "#f5a540" }}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/faq"
              className="nav-link"
              activeStyle={{ color: "#f5a540" }}
            >
              FAQs
            </NavLink>
          </Nav>
          <Nav>
            <label className="mode-switcher" htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                onChange={this.toggleDarkMode}
              />
              <div className="switch">
                <img src={darkSwitch} className="dark" alt="dark mode" />
                <img src={lightSwitch} className="light" alt="light mode" />
              </div>
            </label>
          </Nav>
          <Nav>
            <a
              className="nav-link"
              href="https://github.com/tensorwerk/hangar-py"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
              <span>Github</span>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
