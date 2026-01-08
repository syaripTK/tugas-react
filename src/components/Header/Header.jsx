import "./Header.css";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          Saung Batur
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Blog</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="nav-right">
          <button>Login</button>
          <span>
            <i class="fa-brands fa-searchengin"></i>
          </span>
          <span>
            <i class="fa-solid fa-cart-arrow-down"></i>
          </span>
        </div>

        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};
