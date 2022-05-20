import React from "react";

import "./style.css";

const Goldfinance = () => {
  return (
    <React.Fragment>
      <div>
        <div className="my-3 d-flex justify-content-end">
          <div>
            <img
              src="/images/goldfinance/firststep.png"
              alt="firststep"
              className="finance-right-img"
            />
          </div>
        </div>
        <div>
          <span className="finance-span">GOLD project, our crypto lending platform launch is in phase 4. Think of it as a pawn shop on blockchain. </span>
        </div>
        <div className="d-flex justify-content-center finance-div-md">
          <div>
            <img src="/images/goldfinance/goldfinance.png" alt="goldfinance" className="finance-md-img" />
          </div>
        </div>
        <div className="finance-div-bottom">
          <p className="finance-p-bottom">Raising over 1mil$ in capital in less than 7days from its first dApp project launch : GoldGrinder Miner . This not only proved the marketing experience of the team,but also the Contract Coding abilities
            of the team,creating a product that was much more effective than the previous Contract quality leader ,BB, solving the existing contract bugs and implementing the 1st reward system being completely
            fair towards the users instead of the approach of devs from other 'projects' ,which were focused only on themselves instead of the community . This has likely been the primary factor of GoldGrinder
            having the fastest growth rate at that time and the team is even more focused on expanding its Community Servicing Platform Network !</p>
        </div>
        <p className="my-2">&nbsp;</p>
      </div>
    </React.Fragment>
  );
};

export default Goldfinance;
