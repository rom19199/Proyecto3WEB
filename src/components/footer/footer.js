import React from "react";
import "./footer.css";

const Contacto = () => {
  return (
    <footer className="footer" id= "contacto">
      <div className="footer-info">
        <h1>Hugo Román García</h1>
        <p>Guatemala City</p>
      </div>
      <div className="footer-contact">
        <h3>Contáctame: rom19199@uvg.edu.gt</h3>
        <p>¡Empezemos a trabajar juntos!</p>
      </div>
      <div className="footer-sns">
        <div className="design-by"></div>
        <div className="sns-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contacto;