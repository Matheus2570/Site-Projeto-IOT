import React from "react";
import "./resultados.css";
import gasVideo from "../assets/videotodo.mp4"

const mensagens = [
  {
    id: "m1",
    header: " IoT na Prática",
    text:
      "Compreendemos como dispositivos IoT funcionam no mundo real, desde a coleta de dados com sensores até a transmissão via internet. A experiência prática solidificou conceitos teóricos de conectividade e comunicação M2M (Machine-to-Machine).",
  },
  {
    id: "m2",
    header: "Integração de Sistemas",
    text:
      "Aprendemos a integrar diferentes tecnologias: hardware (ESP32, sensores), software (programação C/C++), redes (Wi‑Fi, MQTT) e interface do usuário (cliente MQTT mobile). Esta visão holística é essencial para projetos IoT completos.",
  },
  {
    id: "m3",
    header: " Aplicação Multidisciplinar",
    text:
      "Unificamos conhecimentos de Sistemas Operacionais (gerenciamento de processos), Redes (protocolos e arquitetura), Programação (algoritmos e lógica) e Engenharia de Software (requisitos e testes) em um único projeto prático.",
  },
];


export default function Resultados() {
  return (
    <main className="r-container">
      <div className="r-topbar" />

      
      <section className="r-section r-learn">
        <h2 className="r-section-title">PRINCIPAIS APRENDIZADOS</h2>

        <div className="r-learn-grid">
          {mensagens.map((m) => (
            <article key={m.id} className="r-card">
              <div className="r-card-header">{m.header}</div>
              <p className="r-card-body">{m.text}</p>
            </article>
          ))}
        </div>

      </section>



      <section className="r-section r-video">
        <h2 className="r-section-title">TESTE DO SENSOR DE GÁS</h2>
        <div className="r-video-wrap">
          <video className="r-video" src={gasVideo} controls preload="metadata" />
        </div>
      </section>

     
    </main>
  );
}