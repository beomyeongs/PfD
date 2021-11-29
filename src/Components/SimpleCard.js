import React from "react";
import "Css/SimpleCard.scss";

function SimpleCard({ name, term, text }) {
  return (
    <div className="card">
      <p>{name}</p>
      <p>{term}</p>
      <p>{text}</p>
    </div>
  );
}

export default SimpleCard;
