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
          <li>Esp32 Microcontroller</li>
          <li>MQTT Protocol</li>
          <li>Mosquitto Broker</li>
          <li>Arduino IDE</li>
          <li>Wokwi Simulador</li>
        </ul>
      </div>

      <div className="footer-right">
        <h4>Informações</h4>
        <p>Email: grupo5@gmail.com</p>
        <p>Telefone: (11) 99999-9999</p>
        <p>Endereço: Sesi Vinhedo / Senai Vinhedo 242</p>
      </div>
    </footer>
  );
};

export default Footer;
