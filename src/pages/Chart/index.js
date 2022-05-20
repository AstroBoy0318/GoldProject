import React from "react";

import "./style.css";

const Chart = () => {
  return (
    <React.Fragment>
      <div className="row mx-0 d-flex">
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center chart-div">
            <div>
              <img src="/images/chart/goldeco.png" alt="goldeco" className="goldeco-img" />
            </div>
          </div>
          <div className="chart-left"></div>
        </div>
        <div className="my-3 d-flex justify-content-center col-md-6">
          <img src="/images/chart/complex.png" alt="complex" className="complex-img" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Chart;
