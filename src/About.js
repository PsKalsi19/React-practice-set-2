import { useState } from "react";

export default function About({ heading, name, learning }) {
  const [showLearnings, toggleLearnings] = new useState(false);
  return (
    <div className="about">
      <h3>7) About</h3>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={() => toggleLearnings(!showLearnings)} className="btn">
        {showLearnings ? "Hide Details !" : "Know More !"}
      </button>
      {showLearnings ? <p> {learning}</p> : null}
      <hr />
    </div>
  );
}
