import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Buytoken = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-4">
          <div>
            <img src="/images/buytoken/goldtoken.png" alt="goldtoken" className="buy-left-img" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="buy-div-right">
            <div className="d-flex justify-content-end gold-right-img">
              <div>
                <img src="/images/buytoken/goldnative.png" alt="goldnative" className="goldnative-img" />
              </div>
            </div>
            <div>
              <div className="buy-p-border">
                <span className=" my-3 d-flex align-items-center" >Token that also helps with sustainability of GOLD GRINDER BNB MINER, 3% of each buy and
                  sell go  es to BNB miner. GOLD contract also has other utilities like GOLD Lotto, Gold Swap...
                  read more about tokenomics of gold token</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-start mt-5">
        <div className="my-2">
          <img src="/images/buytoken/grindtake.png" alt="grindtake" className="me-2" />
        </div>
        <div className="my-2">
          <span className="buy-p-md mx-2">Token: GOLD</span>
        </div>
        <div className="my-2">
          <span className="buy-p-md mx-2">ticker: GG</span>
        </div>
      </div>
      <div className="d-flex justify-content-start my-5">
        <img src="/images/buytoken/tokenomics.png" alt="tokenomics" />
      </div>
      <div className="row d-flex justify-content-between">
        <div className="my-1 col-md-4">
          <p className="buy-p-bottom">&nbsp;12% Tax</p>
          <p className="buy-p-bottom">&nbsp;5% to GG tvl</p>
          <p className="buy-p-bottom">&nbsp;2% to holders</p>
          <p className="buy-p-bottom">&nbsp;2% LP</p>
          <p className="buy-p-bottom">&nbsp;2% to making wallet</p>
          <p className="buy-p-bottom">&nbsp;12% Tax</p>
        </div>
        <div className="my-1 col-md-4 d-flex justify-content-center">
          <div className="v1-native"></div>
        </div>
        <div className="my-1 col-md-4">
          <p className="buy-p-bottom">&nbsp;13% Sell</p>
          <p className="buy-p-bottom">&nbsp;6% to Tvl</p>
          <p className="buy-p-bottom">&nbsp;2% LP</p>
          <p className="buy-p-bottom">&nbsp;2% marketing wallet</p>
          <p className="buy-p-bottom">&nbsp;2% Holders</p>
          <p className="buy-p-bottom">&nbsp;1% Lottery</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Buytoken;
