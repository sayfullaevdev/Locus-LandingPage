import React, { useState } from "react";
import logo from "/icons/logo.png";

function Header() {
  const [active, setActive] = useState("home");

  return (
    <div className="container">
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
        <nav className="navigation">
          <a
            href="#"
            className={active === "home" ? "active" : ""}
            onClick={() => setActive("home")}
          >
            Home
          </a>
          <a
            href="#"
            className={active === "contact" ? "active" : ""}
            onClick={() => setActive("contact")}
          >
            Contact
          </a>
          <a
            href="#"
            className={active === "location" ? "active" : ""}
            onClick={() => setActive("location")}
          >
            Location
          </a>
          <a
            href="#"
            className={active === "about" ? "active" : ""}
            onClick={() => setActive("about")}
          >
            About Us
          </a>
        </nav>
        <button className="SignUp">Sign Up</button>
      </header>
    </div>
  );
}

export default Header;
