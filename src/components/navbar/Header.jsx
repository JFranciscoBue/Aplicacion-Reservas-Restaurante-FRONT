import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <i class="bx bx-restaurant"></i>
        <h1>Lounge & Food Restorant</h1>
      </div>
      <nav className="header__navbar">
        <Link to="/new-reservation" className="header__navbar-button">
          Hace tu reserva
        </Link>
      </nav>
    </header>
  );
};

export default Header;
