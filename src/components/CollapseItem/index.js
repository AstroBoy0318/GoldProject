import React, { useEffect, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import "./style.css";

const CollapseItem = () => {
  const [open1, setOpen1] = useState(false);

  const clickCollapse1 = () => {
    setOpen1(!open1);
  };

  const [open2, setOpen2] = useState(false);

  const clickCollapse2 = () => {
    setOpen2(!open2);
  };

  const [open3, setOpen3] = useState(false);

  const clickCollapse3 = () => {
    setOpen3(!open3);
  };

  const [open4, setOpen4] = useState(false);

  const clickCollapse4 = () => {
    setOpen4(!open4);
  };

  const [open5, setOpen5] = useState(false);

  const clickCollapse5 = () => {
    setOpen5(!open5);
  };

  const [open6, setOpen6] = useState(false);

  const clickCollapse6 = () => {
    setOpen6(!open6);
  };

  const [open7, setOpen7] = useState(false);

  const clickCollapse7 = () => {
    setOpen7(!open7);
  };

  const [open8, setOpen8] = useState(false);

  const clickCollapse8 = () => {
    setOpen8(!open8);
  };

  const [open9, setOpen9] = useState(false);

  const clickCollapse9 = () => {
    setOpen9(!open9);
  };

  const [open10, setOpen10] = useState(false);

  const clickCollapse10 = () => {
    setOpen10(!open10);
  };

  return (
    <React.Fragment>
      <div className="mt-5">
        <div
          className="d-flex justify-content-between align-items-center collapse-title collapse-content"
          onClick={clickCollapse1}
          aria-controls="example-collapse-text"
          aria-expanded={open1}
        >
          <div>
            <span className="collapse-text">01</span>
            <span className="ms-3 faq-font">
              What is the total supply? Is it fixed?
            </span>
          </div>
          {open1 ? (
            <MdKeyboardArrowUp className="icon-color" />
          ) : (
            <MdKeyboardArrowDown className="icon-color" />
          )}
        </div>
        <hr className="line-style" />
        <Collapse in={open1}>
          <div id="example-collapse-text">
            <p className="ms-4 collapse-text">
              a. 1,000,000 FSTEIN. Yes, the total supply is fixed.
            </p>
          </div>
        </Collapse>
      </div>

      <div className="">
        <div
          className="d-flex justify-content-between align-items-center collapse-title collapse-content"
          onClick={clickCollapse2}
          aria-controls="example-collapse-text"
          aria-expanded={open2}
        >
          <div>
            <span className="collapse-text">02</span>
            <span className="ms-3 faq-font">
              How can I purchase Frankenstein DAO (FSTEIN) tokens?
            </span>
          </div>
          {open2 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
        <hr className="line-style" />
        <Collapse in={open2}>
          <div id="example-collapse-text">
            <p className="ms-4 collapse-text">
              a. On SpookySwap using our token contract address here: enter
              contract address here
            </p>
          </div>
        </Collapse>
      </div>

      <div className="">
        <div
          className="d-flex justify-content-between align-items-center collapse-title collapse-content"
          onClick={clickCollapse3}
          aria-controls="example-collapse-text"
          aria-expanded={open3}
        >
          <div>
            <span className="collapse-text">03</span>
            <span className="ms-3 faq-font">
              How do I take part in the community?
            </span>
          </div>
          {open3 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
        <hr className="line-style" />
        <Collapse in={open3}>
          <div id="example-collapse-text">
            <p className="ms-4 collapse-text">
              a. Purchase Frankenstein DAO (FSTEIN) tokens on SpookySwap and
              join our social media channels (Discord, Telegram, Twitter).
            </p>
          </div>
        </Collapse>
      </div>

      <div className="">
        <div
          className="d-flex justify-content-between align-items-center collapse-title collapse-content"
          onClick={clickCollapse4}
          aria-controls="example-collapse-text"
          aria-expanded={open4}
        >
          <div>
            <span className="collapse-text">04</span>
            <span className="ms-3 faq-font">
              What are the benefits of joining the Frankenstein NFT DAO?
            </span>
          </div>
          {open4 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
        <hr className="line-style" />
        <Collapse in={open4}>
          <div id="example-collapse-text">
            <p className="ms-4 collapse-text">
              a. Continuously receive FTM dividends from the 10% sell tax
            </p>
            <p className="ms-4 collapse-text">
              b. Vote on community NFT investments and other key community
              decisions
            </p>
            <p className="ms-4 collapse-text">
              c. Exposure to the blue-chip and up-and-coming NFT projects via
              the Frankenstein DAO Treasury
            </p>
            <p className="ms-4 collapse-text">
              d. Receiving exclusive airdrops
            </p>
          </div>
        </Collapse>
      </div>

      <div className="">
        <div
          className="d-flex justify-content-between align-items-center collapse-title collapse-content"
          onClick={clickCollapse5}
          aria-controls="example-collapse-text"
          aria-expanded={open5}
        >
          <div>
            <span className="collapse-text">05</span>
            <span className="ms-3 faq-font">Is this project audited?</span>
          </div>
          {open5 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
        <hr className="line-style" />
        <Collapse in={open5}>
          <div id="example-collapse-text">
            <p className="ms-4 collapse-text">
              a. Not yet. Our goal is to use Frankenstein DAO Treasury funds to
              pay for a contract audit. We will vote on this as a community
              soon.
            </p>
          </div>
        </Collapse>
      </div>

      <div className="">
        <div
          className="d-flex justify-content-between align-items-center collapse-title collapse-content"
          onClick={clickCollapse6}
          aria-controls="example-collapse-text"
          aria-expanded={open6}
        >
          <div>
            <span className="collapse-text">06</span>
            <span className="ms-3 faq-font">Is the team anonymous?</span>
          </div>
          {open6 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
        <hr className="line-style" />
        <Collapse in={open6}>
          <div id="example-collapse-text">
            <p className="ms-4 collapse-text">
              a. Yes, the team has decided to remain anonymous. Learn more about
              the team on the "Abouts Us" page.
            </p>
          </div>
        </Collapse>
      </div>

      <div className="">
        <div
          className="d-flex justify-content-between align-items-center collapse-title collapse-content"
          onClick={clickCollapse7}
          aria-controls="example-collapse-text"
          aria-expanded={open7}
        >
          <div>
            <span className="collapse-text">07</span>
            <span className="ms-3 faq-font">Is there any tax?</span>
          </div>
          {open7 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
        <hr className="line-style" />
        <Collapse in={open7}>
          <div id="example-collapse-text">
            <p className="ms-4 collapse-text">
              a. Yes. A 15% tax is applied on all buy and sell transactions. 10%
              of the buy tax is distributed to the DAO Treasury for future NFT
              investments. 10% of the sell tax is converted into Fantom (FTM)
              and distributed to FSTEIN token holders as a dividend. On all buy
              and sell transactions, 3% is allocated to the Liquidity Pool to
              allow for token growth and 2% is allocated to marketing expenses.
            </p>
          </div>
        </Collapse>
      </div>

      <div className="">
        <div
          className="d-flex justify-content-between align-items-center collapse-title collapse-content"
          onClick={clickCollapse8}
          aria-controls="example-collapse-text"
          aria-expanded={open8}
        >
          <div>
            <span className="collapse-text">08</span>
            <span className="ms-3 faq-font">How do I receive my dividend?</span>
          </div>
          {open8 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
        <hr className="line-style" />
        <Collapse in={open8}>
          <div id="example-collapse-text">
            <p className="ms-4 collapse-text">
              a. Dividends are paid out on an ongoing basis. You may retrieve
              these dividends on our "Dividends" page.
            </p>
          </div>
        </Collapse>
      </div>

      <div className="">
        <div
          className="d-flex justify-content-between align-items-center collapse-title collapse-content"
          onClick={clickCollapse9}
          aria-controls="example-collapse-text"
          aria-expanded={open9}
        >
          <div>
            <span className="collapse-text">09</span>
            <span className="ms-3 faq-font">
              How are Frankenstein DAO Treasury funds invested?
            </span>
          </div>
          {open9 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
        <hr className="line-style" />
        <Collapse in={open9}>
          <div id="example-collapse-text">
            <p className="ms-4 collapse-text">
              a. Dividends are paid out on an ongoing basis. You may retrieve
              these dividends on our "Dividends" page.a. We will invest the
              treasury into NFT projects. 60% of the treasury investments will
              be voted on by the community and 40% of the investments will be
              determined by the Frankenstein Investment Lead. We can discuss as
              a community whether we would like to adjust this investment
              allocation.
            </p>
          </div>
        </Collapse>
      </div>

      <div className="">
        <div
          className="d-flex justify-content-between align-items-center collapse-title collapse-content"
          onClick={clickCollapse10}
          aria-controls="example-collapse-text"
          aria-expanded={open10}
        >
          <div>
            <span className="collapse-text">10</span>
            <span className="ms-3 faq-font">
              How can I view the Frankenstein DAO Treasury funds?
            </span>
          </div>
          {open10 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
        <hr className="line-style" />
        <Collapse in={open10}>
          <div id="example-collapse-text">
            <p className="ms-4 collapse-text">
              a. The Frankenstein DAO Treasury address is here:
            </p>
            <p className="ms-4 collapse-text">
              0xCBE395CB70FDc2DAbF8fde97C98576e4C6f2b6Eb
            </p>
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
};

export default CollapseItem;
