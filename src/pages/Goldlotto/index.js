import React from "react";

import "./style.css";

const Goldlotto = () => {
  return (
    <React.Fragment>
      <div>
        <div className="my-5 d-flex flex-wrap">
          <div>
            <img src="/images/goldlotto/lotto.png" alt="lotto" className="lotto-img" />
          </div>
          <div className="lotto-top-div">
            <div className="mt-2 d-flex justify-content-end">
              <div>
                <img src="/images/goldlotto/win.png" alt="win" className="lotto-win-img" />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span className="lotto-top-p">Day long 24/7 with gold lotto without having to enter manually.  Every holder of GOLD token has chance to win lotto, 1% of each buy and sell transaction goes
                towards a random winner. Increase your winning chances  by investing in both,  Gold Grinder and GOLD token. </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="lotto-div-pad">
              <div className="lotto-left-div">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <span className="lotto-text1">0xa65ffc02b7ee0f96661e22fe9ca11a449000f7ed</span>
                  <span className="lotto-text11">0xa65....f7ed</span>
                  <span className="lotto-text2"><b>45.9 GOLD</b></span>
                </div>
                <hr />
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <span className="lotto-text1">0xa65ffc02b7ee0f96661e22fe9ca11a449000f7ed</span>
                  <span className="lotto-text11">0xa65....f7ed</span>
                  <span className="lotto-text2"><b>3345.9 GOLD</b></span>
                </div>
                <hr />
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <span className="lotto-text1">0xa65ffc02b7ee0f96661e22fe9ca11a449000f7ed</span>
                  <span className="lotto-text11">0xa65....f7ed</span>
                  <span className="lotto-text2"><b>37483745.9 GOLD</b></span>
                </div>
                <hr />
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <span className="lotto-text1">0xa65ffc02b7ee0f96661e22fe9ca11a449000f7ed</span>
                  <span className="lotto-text11">0xa65....f7ed</span>
                  <span className="lotto-text2"><b>447384735.9 GOLD</b></span>
                </div>
                <hr />
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <span className="lotto-text1">0xa65ffc02b7ee0f96661e22fe9ca11a449000f7ed</span>
                  <span className="lotto-text11">0xa65....f7ed</span>
                  <span className="lotto-text2"><b>34343223432.9 GOLD</b></span>
                </div>
                <hr />
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <span className="lotto-text1">0xa65ffc02b7ee0f96661e22fe9ca11a449000f7ed</span>
                  <span className="lotto-text11">0xa65....f7ed</span>
                  <span className="lotto-text2"><b>45.9 GOLD</b></span>
                </div>
                <hr />
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <span className="lotto-text1">0xa65ffc02b7ee0f96661e22fe9ca11a449000f7ed</span>
                  <span className="lotto-text11">0xa65....f7ed</span>
                  <span className="lotto-text2"><b>5.9 GOLD</b></span>
                </div>
                <hr />
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <span className="lotto-text1">0xa65ffc02b7ee0f96661e22fe9ca11a449000f7ed</span>
                  <span className="lotto-text11">0xa65....f7ed</span>
                  <span className="lotto-text2"><b>43435.9 GOLD</b></span>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="lotto-div-pad">
              <div className="lotto-right-div">
                <span className="lotto-text2">Your Winners</span>
                <hr className="my-4" />
                <div className="my-4 d-flex justify-content-between">
                  <span className="lotto-text3">364736437 GOLD</span>
                  <span className="lotto-text3">24/05/2022</span>
                </div>
              </div>
            </div>
            <div className="lotto-div-pad">
              <div className="lotto-right-div">
                <span className="lotto-text2">Search For An Address Winnings</span>
                <hr className="my-4" />
                <div className="lotto-div-input-style my-5">
                  <input
                    type="number"
                    name="bnb-input"
                    id="bnb-input"
                    placeholder="INSERT VALUE IN BNB ..."
                    className="lotto-input_style" />
                  <p className="lotto-input-p">SEARCH</p>
                </div>
                <div className="my-2 d-flex justify-content-center">
                  <span className="lotto-text1">Winners For Address</span>
                </div>
                <div className="my-4 d-flex justify-content-center">
                  <span className="lotto-text4">0xa65ffc02b7ee0f96661e22fe9ca11a449000f7ed</span>
                  <span className="lotto-text12">0xa65....f7ed</span>
                </div>
                <div className="mb-4 d-flex justify-content-between">
                  <span className="lotto-text3">364736437 GOLD</span>
                  <span className="lotto-text3">24/05/2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Goldlotto;
