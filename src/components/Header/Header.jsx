import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          WE DROP IT LIKE IT’S <span className="highlight">HOT</span>
        </h2>
        <p>
          Well, not literally. That would be a health hazard. But we do in fact
          drop our food by drones! That is almost as jaw-droppingly awesome as
          our food. The only thing that is not dropping here is your
          blood-sugar.
        </p>
        <h1>OUR JAW-DROPPING FAVORITES</h1>
      </div>
    </div>
  );
}

export default Header;
