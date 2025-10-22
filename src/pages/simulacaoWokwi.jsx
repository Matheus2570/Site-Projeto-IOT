import React from "react";
import ImagemWokwi from "../assets/imagemIlustrativaWokwi.jpeg";
import './simulacaoWokwi.css';

function SimulacaoWokwi() {
  return (
    <div className="simulacao-page">
      
      {/* Seção do circuito */}
      <div className="simulacao-circuito">
        <h2>CIRCUITO ELETRÔNICO NO WOKWI</h2>
        <div className="simulacao-conteudo">
          <div className="simulacao-texto">
            <p>
              O projeto foi desenvolvido e testado utilizando o Wokwi, um simulador online de eletrônica <br />
              que permite criar e testar circuitos com microcontroladores como o ESP32 sem a necessidade de hardware físico.<br />
              A IDE Sketch Ino é utilizada para programar o ESP32 em linguagem C/C++, compatível com o framework Arduino.<br />
              O código desenvolvido gerencia a leitura dos sensores, controla os LEDs e implementa a comunicação MQTT via Wi-Fi.
            </p>
          </div>
          <div className="simulacao-imagem">
            <img src={ImagemWokwi} alt="Circuito Wokwi" />
          </div>
        </div>
      </div>

      {/* Seção dos componentes */}
      <div className="simulacao-componentes">
        <div className="simulacao-texto">
          <h3>COMPONENTES:</h3>
          <ul>
            <li>ESP32: Microcontrolador principal com Wi-Fi integrado</li>
            <li>DHT11: Sensor de temperatura e umidade (operando a 3V)</li>
            <li>MQ-135: Sensor de qualidade do ar/gases (operando a 5V)</li>
            <li>LEDs: Indicadores visuais de status (verde) e alerta (vermelho)</li>
            <li>Resistores: Limitadores de corrente para os LEDs</li>
          </ul>
        </div>

        {/* Link do projeto */}
        <div className="simulacao-link">
          <p>ACESSE O NOSSO PROJETO NO WOKWI</p>
          <a
            href="https://wokwi.com/projects/444878542364536833"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://wokwi.com/projects/444878542364536833
          </a>
        </div>
      </div>

    </div>
  );
}

export default SimulacaoWokwi;
