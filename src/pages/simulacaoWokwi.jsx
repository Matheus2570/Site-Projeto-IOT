import React from "react";
import ImagemWokwi from "../assets/imagemIlustrativaWokwi.jpeg";

function SimulacaoWokwi() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#e5e5e5" }}>
      {/* Cabeçalho */}
      
  {/* Seção do circuito */}
      <div
        style={{
          backgroundColor: "white",
          padding: "40px 20px",
          textAlign: "center",
          padding: "60px",
        }}
      >
        <h2 style={{ fontWeight: "300", marginBottom: "30px" }}>
          CIRCUITO ELETRÔNICO NO WOKWI
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {/* Linhas de texto */}
          <div style={{ textAlign: "left" }}>
  <p>
    O projeto foi desenvolvido e testado utilizando o Wokwi, um simulador online de eletrônica <br></br>
    que permite criar e testar circuitos com microcontroladores como o ESP32 sem a necessidade de hardware físico.<br />
    A IDE Sketch Ino é utilizada para programar o ESP32 em linguagem C/C++, compatível com o framework Arduino.<br />
    O código desenvolvido gerencia a leitura dos sensores, controla os LEDs e implementa a comunicação MQTT via Wi-Fi.
  </p>
</div>

          {/* Espaço da imagem */}
          <div style={{
  width: "280px",
  height: "180px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}}>
  <img src= {ImagemWokwi} style={{ width: "110%", height: "110%", objectFit: "cover" }} />
</div>
        </div>
      </div>

      {/* Seção dos componentes */}
      <div
        style={{
          padding: "40px 20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h3 style={{ fontWeight: "300", marginBottom: "10px" }}>
            COMPONENTES:
          </h3>
          <ul>
            <li>ESP32: Microcontrolador principal com Wi-Fi integrado</li>
            <li>DHT11: Sensor de temperatura e umidade (operando a 3V)</li>
            <li>MQ-135: Sensor de qualidade do ar/gases (operando a 5V)</li>
            <li>LEDs: Indicadores visuais de status (verde) e alerta (vermelho)</li>
            <li>Resistores: Limitadores de corrente para os LEDs</li>
          </ul>
        </div>

        {/* Link do projeto */}
        <div
          style={{
            backgroundColor: "white",
            padding: "15px",
            borderRadius: "6px",
            textAlign: "center",
            maxWidth: "350px",
          }}
        >
          <p>ACESSE O NOSSO PROJETO NO WOKWI</p>
          <a
            href="https://wokwi.com/projects/444878542364536833"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0b66c3", textDecoration: "none" }}
          >
          https://wokwi.com/projects/444878542364536833
          </a>
        </div>
      </div>
    </div>
      
  
  );
}

export default SimulacaoWokwi;

