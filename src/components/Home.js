import React from "react";
import "./Home.css";

function HomeComponent({ props1 }) {
  return (
    <div className="fruits-container">
      <h1>Project 1 -- Fruits display</h1>
      <ul>
        {props1.map((item, key) => {
          return (
            <li key={key + 1}>
              {key + 1}. {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomeComponent;
