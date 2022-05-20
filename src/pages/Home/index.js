import React from "react";
import Footer from "../../components/Footer";

import "./style.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="row mx-0 d-flex">
        <div className="col-md-6 home-left-style">
          <div className="my-0">
            <div className="d-flex justify-content-center">
              <div>
                <img
                  src="/images/home/letter.png"
                  alt="letter"
                  className="letter-img"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <p className="p-text-home">The GOLD PROJECT is one of the Most Advanced Multi-Platform Networks among
                  2022 Projects, It's a whole ecosystem loaded with most advanced blockchain solution
                  s that helps ordinary people to get in crypto world with ease. </p>
              </div>
            </div>
          </div>
          <div className="div-md-style">
            <p className="p-md-text mx-5 d-flex">Our native token GOLD</p>
            <p className="p-md-part mx-5">is connected to all our other dapps/products<br />
              like GOLD SWAP, GOLD FINANCE (crypto lending) and GOLD Lotto.<br />
              It's a whole ecosytem that will thrive together. </p>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="/images/home/head.png"
            alt="head"
            className="head-img"
          />
          <div className="my-4 d-flex justify-content-end">
            <div className="d-flex justify-content-around">
              <div>
                <img src="/images/home/xmlid.png" alt="xmlid" className="px-2 py-2" />
                <img src="/images/home/reddit.png" alt="reddit" className="px-2 py-2" />
                <img src="/images/home/instagram.png" alt="instagram" className="px-2 py-2" />
                <img src="/images/home/tiktok.png" alt="tiktok" className="px-2 py-2" />
                <img src="/images/home/discord.png" alt="discord" className="px-2 py-2" />
                <img src="/images/home/telegram.png" alt="telegram" className="px-2 py-2" />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center div-bt-style">
        <p>The Gold Project is backed by an experienced team who believes in blockchain tenhnology.
          All our contracts are made from scartch by our hard working development team who believe crypto is the future.</p>
      </div>

    </React.Fragment>
  );
};

export default Home;
