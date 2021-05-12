import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <ul style={{ backgroundColor: props.bg, height: "50px" }}>
        <li>
          <Link to="/" className="listItems">
            Home
          </Link>
        </li>

        <li>
          <Link to="/explore" className="listItems">
            Explore
          </Link>
        </li>

        <li>
          <Link to="/about" className="listItems">
            About
          </Link>
        </li>

        <li>
          <Link to="/cart" className="listItems">
            Cart
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
