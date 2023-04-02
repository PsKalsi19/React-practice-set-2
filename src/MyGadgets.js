import { useState } from "react";

export default function MyGadgets({ gadgets }) {
  const [highlightGadgets, toggleHighlights] = new useState(false);
  return (
    <div className="myGadgets">
      <h3>8) My Gadgets</h3>
      <ol>
        {gadgets.map(({ name, description, price, id }) => (
          <li key={id}>
            <p
              style={{
                padding: "2rem",
                backgroundColor:
                  highlightGadgets && price > 50000
                    ? "lightGreen"
                    : "lightBlue",
                border: "2px solid #14213d",
                borderRadius: "0.5rem"
              }}
            >
              Name: {name}
              <br />
              Description: {description}
              <br />
              Price: {price}
            </p>
          </li>
        ))}
      </ol>

      <button onClick={() => toggleHighlights(!highlightGadgets)}>
        {!highlightGadgets
          ? "Highlight Expensive Gadgets"
          : "Paisa hath ki Mail hai"}
      </button>

      <hr />
    </div>
  );
}
