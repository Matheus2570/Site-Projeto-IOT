import React from "react";
import './Hardware.css';

// Import das imagens
import ImgDHT11 from "../assets/Imagemdht11.png";
import ImgESP32 from "../assets/imagemesp32.png";
import ImgMQ135 from "../assets/mq135.png";
import ImgLED from "../assets/ledImagem.png";

function Hardware() {
  const cards = [
    {
      title: "DHT11",
      img: ImgDHT11,
      text: [
        "Sensor de temperatura e umidade",
        "Tensão de operação: 3.3V a 5V",
        "Faixa de medição: 0–50°C e 20–90% UR",
        "Precisão: ±2°C e ±5% UR",
        "Interface digital simples",
        "Tempo de resposta: 2 segundos",
        "Baixo consumo de energia"
      ]
    },
    {
      title: "ESP32",
      img: ImgESP32,
      text: [
        "Processador dual-core Tensilica Xtensa LX6",
        "Clock de até 240 MHz",
        "Wi-Fi e Bluetooth integrados",
        "520 KB de RAM interna",
        "34 pinos GPIO programáveis",
        "Suporte a I2C, SPI e UART",
        "Tensão de operação: 3.3V",
        "Baixo consumo de energia"
      ]
    },
    {
      title: "MQ-135",
      img: ImgMQ135,
      text: [
        "Detecta: NH₃, NOₓ, álcool, benzeno, fumaça, CO₂",
        "Tensão de operação: 5V",
        "Saída analógica proporcional à concentração de gás",
        "Aquecimento interno para operação estável",
        "Tempo de aquecimento: 24–48h",
        "Sensibilidade ajustável via potenciômetro",
        "Ideal para monitoramento da qualidade do ar"
      ]
    },
    {
      title: "LEDs",
      img: ImgLED,
      text: [
        "LED Verde: funcionamento normal",
        "LED Vermelho: alerta de gases nocivos",
        "Tensão de operação: 2V a 3.3V",
        "Corrente típica: 20mA",
        "Resistores: 220Ω a 330Ω",
        "Feedback visual rápido",
        "Longa vida útil (50.000+ horas)"
      ]
    }
  ];

  return (
    <div className="hardware-page">
      <div className="hardware-container">
        {cards.map((card, index) => (
          <div key={index} className="hardware-card">
            <img src={card.img} alt={card.title} />
            <div className="hardware-text">
              <h2>{card.title}</h2>
              <ul>
                {card.text.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hardware;
