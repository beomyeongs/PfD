import React from "react";
import "Css/CareerCard.scss";

function CareerCard({ name, term, text, direction }) {
  return (
    <div key={name} className={"careerCard " + direction}>
      <p>{name}</p>
      <p>{term}</p>
      <p>{text}</p>
    </div>
  );
}

export default CareerCard;
