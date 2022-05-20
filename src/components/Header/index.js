import React from "react";
// import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav } from "react-bootstrap";
import { BsAlarm } from "react-icons/bs";
import ReactDOM from "react-dom";
// import { useWalletButton } from "../../hooks/useWalletButton";

import "./style.css";

const Header = () => {

  // const { provider, setProvider, walletAddress, setWalletAddress } =
  //   useContext(WalletContext);
  // const walletButton = useWalletButton();
  // useEffect(() => {
  //   if (localStorage.getItem(1)) {
  //     walletButton();
  //   }
  // }, []);

  return (
    <React.Fragment>
      <Navbar
        expand="xl"
        className="header-field d-flex justify-content-start"
      >
        <NavbarBrand as={NavLink} to="/">
          <div className="d-flex">
            <img src="/images/head/head.png" alt="head" />
          </div>
        </NavbarBrand>
        <div className="my-3 text-end d-flex justify-content-between" style={{ width: '100%' }}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-menu" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/buytoken" className="menu-item">
                <span className="menu-text">Buy Token</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/goldgrinderminer" className="menu-item">
                <span className="menu-text">Gold Grinder Miner</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/goldlotto" className="menu-item">
                <span className="menu-text">Gold Lotto</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/goldswap" className="menu-item">
                <span className="menu-text">Gold Swap</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/goldfinance" className="menu-item">
                <span className="menu-text">Gold Finance</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/chart" className="menu-item">
                <span className="menu-text">Chart</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="menu-item">
                <span className="menu-text">About</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/" className="menu-item">
                <span className="menu-text">Telegram</span>
              </Nav.Link>
            </Nav>
            <button type="button" className="connect-btn">
              <span>Connect</span>
            </button>

          </Navbar.Collapse>
        </div>
      </Navbar>
    </React.Fragment >
  );
};

export default Header;
