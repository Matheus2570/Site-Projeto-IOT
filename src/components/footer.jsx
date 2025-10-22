import React from "react";
import "./Footer.css";
import logo from "../assets/FotoDoGrupo.jpeg"; // coloque o caminho da sua logo aqui

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>

      <div className="footer-center">
        <h4>Tecnologias Utilizadas</h4>
        <ul>
          <li>React</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React Router</li>
        </ul>
      </div>

      <div className="footer-right">
        <h4>Informações</h4>
        <p>Email: contato@exemplo.com</p>
        <p>Telefone: (11) 99999-9999</p>
        <p>Endereço: Rua Exemplo, 123</p>
      </div>
    </footer>
  );
};

export default Footer;
