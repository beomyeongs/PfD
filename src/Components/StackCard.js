import React from "react";
import "Css/StackCard.scss";
import icon from "Json/icon.json";

function StackCard({ src }) {
  const img = String(src);
  return <img src={icon[img]} className="stackCard" />;
}

export default StackCard;
