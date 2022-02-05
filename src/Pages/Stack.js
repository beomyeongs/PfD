import React from "react";
import StackCard from "Components/StackCard";
import stack from "Json/stack.json";
import "Css/Stack.scss";

const Stack = () => {
  return (
    <div className="component stack">
      <h1>기술 스택 페이지</h1>
      <div className="stack__section">
        {stack.map((data) => (
          <>
            <StackCard src={data.src} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Stack;
