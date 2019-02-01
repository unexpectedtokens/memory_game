import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <button className="Card" onClick={props.clicked}>
      {props.number}
    </button>
  );
};
export default Card;
