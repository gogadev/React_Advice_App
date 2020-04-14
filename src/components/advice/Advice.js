import React from "react";

import cardImg from "../../assets/pen.png";
import "./advice.style.css";

const Advice = ({ advice, getAdvice }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div key={advice.slip_id}>
          <h1 className="advice">
            <span>
              {" "}
              <img className="card-img" src={cardImg} alt="" />
            </span>
            {advice.advice}
          </h1>
          <button className="button" onClick={getAdvice}>
            <span>Give Me Advice</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advice;
