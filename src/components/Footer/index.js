import React from "react";

import "./style.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex">
            <img src="/images/head/head.svg" alt="head" className="logo" />
            <img
              src="/images/head/Frankenstein NFT DAO.svg"
              alt="Frankenstein NFT DAO"
              className="logo-txt ms-2"
            />
          </div>
          <div className="col-md-6">
            <p className="footer-text text-end">
              <small>
                Our mission is to provide everyday crypto investors access to
                the best NFT projects without having to spend the time and
                intensive capital to do so.
              </small>
            </p>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-6">
            <p>
              <small className="footer-font">
                Copyright Frankenstein NFT DAO &copy; {new Date().getFullYear()}
              </small>
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end">
              <img
                src="/images/home/telegram.png"
                alt="telegram"
                className="ms-2"
              />
              <img
                src="/images/home/discord.png"
                alt="discord"
                className="ms-2"
              />
              <img
                src="/images/home/twitter.png"
                alt="twitter"
                className="ms-2"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
