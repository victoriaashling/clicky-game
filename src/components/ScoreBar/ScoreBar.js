import React from "react";
import "./ScoreBar.css"

const ScoreBar = props => (
  <div className="fixed-top score-bar">
    <div className="row">
      <div className="col-sm-7">
        <h4>{props.verdict}</h4>
      </div>
      <div className="col-sm-5 text-right">
        <h4>Score: {props.currentScore} | Top Score: {props.topScore}</h4>
      </div>
    </div>
  </div>
);

export default ScoreBar;