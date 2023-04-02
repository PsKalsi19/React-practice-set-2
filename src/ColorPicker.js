import { useState } from "react";

export default function ColorPicker({ red, blue, green }) {
  const [showColors, setColorState] = new useState("");
  return (
    <div className="colorPicker">
      <h3>9) Color Picker</h3>

      <div
        style={{
          margin: "1rem"
        }}
      >
        <button onClick={() => setColorState(red)} className="btn">
          Red
        </button>
        {showColors === "#EE4B2B" ? (
          <p
            style={{
              color: showColors
            }}
          >
            {showColors}
          </p>
        ) : null}
      </div>
      <div
        style={{
          margin: "1rem"
        }}
      >
        <button onClick={() => setColorState(blue)} className="btn">
          Blue
        </button>
        {showColors === "#89CFF0" ? (
          <p
            style={{
              color: showColors
            }}
          >
            {showColors}
          </p>
        ) : null}
      </div>

      <div
        style={{
          margin: "1rem"
        }}
      >
        <button onClick={() => setColorState(green)} className="btn">
          Green
        </button>
        {showColors === "#7FFFD4" ? (
          <p
            style={{
              color: showColors
            }}
          >
            {showColors}
          </p>
        ) : null}
      </div>
      <hr />
    </div>
  );
}
