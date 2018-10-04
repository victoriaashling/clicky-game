import React from "react";
import "./Card.css";

const Card = props => (
  <div className="col-sm-3">
    <div className="card" onClick={props.clickHandler} id={props.id}>
      <div className="card-body">
        <p className="card-text text-center">{props.children}</p>
      </div>
    </div>
  </div>
);

export default Card;