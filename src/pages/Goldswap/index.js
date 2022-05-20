import React from "react";

import "./style.css";

const Goldswap = () => {
  return (
    <React.Fragment>
      <div>
        <div className="my-5 d-flex justify-content-center align-items-center">
          <div>
            <img src="/images/goldswap/goldswap.png" alt="goldswap" className="swap-img" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div>
              <img src="/images/goldswap/swap.png" alt="swap" className="swap-left-gold" />
            </div>
            <p className="mx-5 my-5 swap-text">Introducing GOLD SWAP, your all in one solution for all BSC token swaps!
              <br /> More info about bridging coming soon. token</p>
            <img src="/images/goldswap/soon.png" alt="soon" className="mb-3" />
          </div>
          <div className="col-md-4">
            <div className="swap-right">
              <div className="d-flex justify-content-between">
                <div className=""></div>
                <span className="ms-3 swap-span"><b>Swap</b></span>
                <div className="my-3 d-flex align-items-center">
                  <div>
                    <img src="/images/goldswap/setting.png" alt="setting" />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <p className="swap-text">Trade tokens in an instant</p>
              </div>
              <hr className="hr-style" />
              <div className="d-flex align-items-center">
                <img src="/images/goldswap/imshr.png" alt="imshr" />
                <span className="mx-3 swap-right-text">BNB</span>
                <img src="/images/goldswap/xmild.png" alt="xmild" className="xmild-style" />
              </div>
              <div className="swap-div-input-style my-4">
                <input
                  type="number"
                  name="bnb-input"
                  id="bnb-input"
                  placeholder=""
                  className="swap-input_style" />
              </div>
              <div className="d-flex justify-content-center">
                <img src="/images/goldswap/group.png" alt="group" />
              </div>
              <div className="d-flex align-items-center">
                <img src="/images/goldswap/golden.png" alt="golden" />
                <span className="mx-3 swap-right-text">GOLD</span>
                <img src="/images/goldswap/xmild.png" alt="xmild" className="xmild-style" />
              </div>
              <div className="swap-div-input-style my-4">
                <input
                  type="number"
                  name="bnb-input"
                  id="bnb-input"
                  placeholder=""
                  className="swap-input_style" />
              </div>
              <div className="my-4 d-flex justify-content-between">
                <span className="mx-2 swap-text">Slippage Tolerance</span>
                <span className="mx-2 swap-right-text1"><b>0.5%</b></span>
              </div>
              <div className="my-3 d-flex justify-content-center align-items-center">
                <div>
                  <div className="wallet-background">
                    <span className="my-2 mx-2 swap-span-text"><b>Connect wallet</b></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Goldswap;
