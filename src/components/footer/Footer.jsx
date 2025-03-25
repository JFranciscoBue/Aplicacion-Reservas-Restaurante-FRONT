import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>@ 2025 Copyrights. Lounge & Food Restorant</p>
        <div className="footer__content-socials">
          <a href="#">
            <i class="bx bxl-instagram"></i>
            <p>Instagram</p>
          </a>
          <a href="#">
            <i class="bx bxl-facebook"></i>
            <p>Facebook</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
