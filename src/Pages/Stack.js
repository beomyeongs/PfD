import React from "react";
import StackCard from "Components/StackCard";
import icon from "Json/icon.json";
import "Css/Stack.scss";

const Stack = () => {
  return (
    <div className="component stack">
      <h1>기술 스택 페이지</h1>
      <div className="stack__section">
        <StackCard src={icon.react} />
        <StackCard src={icon.spring} />
        <StackCard src={icon.tf} />
        <StackCard src={icon.keras} />
        <StackCard src={icon.pytorch} />
        <StackCard src={icon.git} />
        <StackCard src={icon.git} />
        <StackCard src={icon.git} />
      </div>
    </div>
  );
};

export default Stack;
