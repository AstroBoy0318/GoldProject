import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/Chart";
import Dough from "../../components/Dough";

import "./style.css";

const Goldgrinderminer = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div>
          <img src="/images/goldgrinderminer/goldminer.png" alt="goldminer" className="goldminer-img" />
        </div>
      </div>
      <div className="upper-div my-4">
        <div className="mx-5 my-4 d-flex flex-wrap">
          <div className="ms-3">
            <p className="grinder-p-text1">Contact</p>
            <p className="grinder-p-text2">723.1754 BNB</p>
          </div>
          <div className="v1"></div>
          <div className="ms-3">
            <p className="grinder-p-text1">Wallet</p>
            <p className="grinder-p-text2">0 BNB</p>
          </div>
          <div className="v1"></div>
          <div className="ms-3">
            <p className="grinder-p-text1">Miner Cost</p>
            <p className="grinder-p-text2">0.97 GOLD</p>
          </div>
          <div className="v1"></div>
          <div className="ms-3">
            <p className="grinder-p-text1">Your Gold</p>
            <p className="grinder-p-text2">0 GOLD</p>
          </div>
          <div className="v1"></div>
          <div className="ms-3">
            <p className="grinder-p-text1">Gold Mine Rate</p>
            <p className="grinder-p-text2">0 GOLD/H</p>
          </div>
          <div className="v1"></div>
          <div className="ms-3">
            <p className="grinder-p-text1">Gold Mine Rate</p>
            <p className="grinder-p-text2">0 BNB/DAY</p>
          </div>
        </div>
        <hr />
        <div className="row d-flex">
          <div className="col-md-8">
            <p className="minder-p-text3 my-4">On mobile you might need to double tap on the buttons</p>
            <div className="div-input-style my-4 mx-5">
              <input
                type="number"
                name="bnb-input"
                id="bnb-input"
                placeholder="INSERT VALUE IN BNB ..."
                className="input_style" />
              <p className="input-p">BNB</p>
            </div>
            <div className="d-flex flex-wrap justify-content-between">
              <div className="mx-5 my-2">
                <img src="/images/goldgrinderminer/goldbutton.png" alt="goldbutton" className="grind-button" />
              </div>
              <div className="mx-5 d-flex flex-wrap align-items-center">
                <span className="minder-p-text4 mx-2 my-2">You will buy:</span>
                <div>
                  <img src="/images/goldgrinderminer/group.png" alt="group" className="my-2" />
                </div>
                <span className="minder-p-text4 mx-2 my-2">Gold</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-wrap">
            <div className="v2"></div>
            <div className="mx-3 mt-3 d-flex justify-content-start">
              <p className="minder-p-text5">Your Rewards</p>
            </div>
            <div className="mx-3 d-flex flex-wrap justify-content-center align-items-center">
              <div>
                <span className="span-text1">0</span>
              </div>
              <div>
                <span className="mx-3 span-text1">BNB</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="mb-3 d-flex flex-wrap justify-content-end">
          <div className="mx-2 my-2">
            <img src="/images/goldgrinderminer/hireminter.png" alt="hireminter" className="grinder-img-style" />
          </div>
          <div className="mx-2 my-2">
            <img src="/images/goldgrinderminer/sellgold.png" alt="sellgold" className="grinder-img-style" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 my-2">
          <div className="grinder-div-left">
            <div className="mx-2 mt-3 d-flex justify-content-between align-items-center">
              <span className="grinder-span-text1">Daily Returns</span>
              <span className="grinder-span-text2">9 %</span>
            </div>
            <hr />
            <div className="mx-2 d-flex justify-content-between align-items-center">
              <span className="grinder-span-text1">APR</span>
              <span className="grinder-span-text2">3,256 %</span>
            </div>
            <hr />
            <div className="mx-2 mb-3 d-flex justify-content-between align-items-center">
              <span className="grinder-span-text1">DEV FEE</span>
              <span className="grinder-span-text2">2%</span>
            </div>
          </div>
        </div>
        <div className="col-md-8 my-2">
          <div className="grinder-div-right">
            <span className="grinder-p-text1">Referrals</span>
            <div className="div-input-style1 my-4">
              <input
                type="number"
                name="bnb-input"
                id="bnb-input"
                placeholder="INSERT VALUE IN BNB ..."
                className="input_style1" />
              <p className="input-p1">COPY</p>
            </div>
            <p className="my-4 grinder-p-text5">Earn 12.5% of the BNB deposited from anyone who uses your referral link!</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Goldgrinderminer;
