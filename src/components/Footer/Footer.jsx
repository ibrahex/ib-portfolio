import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
      <footer className="footer">

      {/* Gradient Line */}
      <div className="footer-line"></div>

      <div className="footer-content">

        {/* Logo */}
        <h2 className="footer-logo">
          IB Portfolio
        </h2>

        {/* Social Links */}
        <div className="footer-socials">

          <a href="https://github.com/ibrahex">GitHub</a>

          <a href="https://mail.google.com/mail/u/0/?pli=1#inbox">Gmail</a>

          <a href="https://www.facebook.com/?locale=fr_FR">Facebook</a>

        </div>

        {/* Navigation */}
        <div className="footer-links">

          <a href="#About">About</a>

          <a href="#main-section">Projects</a>

          <a href="#contact-section">Contact</a>

        </div>

        {/* Copyright */}
        <p className="footer-copy">
          © 2026 All rights reserved
        </p>

        {/* Back To Top */}
        <button
          className="top-btn"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          }
        >
          ↑
        </button>

      </div>

    </footer>

  );
};

export default Footer;