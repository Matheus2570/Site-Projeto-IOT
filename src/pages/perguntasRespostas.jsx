import React, { useState } from "react";
import "./perguntasRespostas.css";

const cards = [
  {
    id: "c1",
    title: "FUNDAMENTOS DE IOT",
    qas: [
      { id: "c1q1", q: "O que é Internet das Coisas (IoT)?", a: "IoT é uma rede de dispositivos físicos conectados à internet, capazes de coletar, enviar e receber dados." },
      { id: "c1q2", q: "Quais são as três fases de uma solução de IoT?", a: "Things (dispositivos/sensores), Cloud (armazenamento/processamento) e Intelligence (análise/dados/decisão)." },
      { id: "c1q3", q: "Quais os principais desafios de heterogeneidade em IoT?", a: "Diversidade de hardware, protocolos de comunicação, formatos de dados e plataformas." },
      { id: "c1q4", q: "Por que baixo consumo de energia é crítico em IoT?", a: "Muitos dispositivos operam com baterias e precisam funcionar por longos períodos sem recarga." },
      { id: "c1q5", q: "Qual o papel do middleware em IoT?", a: "Atua como uma camada intermediária que facilita a comunicação e gestão entre dispositivos e aplicações." },
      { id: "c1q6", q: "Quais são os riscos de segurança em redes IoT?", a: "Invasões, vazamento de dados, controle remoto indevido e falhas de autenticação." },
    ],
  },
  {
    id: "c2",
    title: "HARDWARE E SENSORES",
    qas: [
      { id: "c2q1", q: "Quais sensores são usados em IoT?", a: "Temperatura, umidade, movimento, luminosidade, pressão, etc. Podem ser analógicos ou digitais." },
      { id: "c2q2", q: "O que é um microcontrolador?", a: "É um chip que integra CPU, memória e periféricos, usado para controlar sensores/atuadores em IoT." },
      { id: "c2q3", q: "Como o consumo de energia impacta o hardware IoT?", a: "nfluencia a escolha de componentes e modos de operação como sleep mode para economizar bateria." },
      { id: "c2q4", q: "Desafios físicos na integração de sensores?", a: "Espaço, alimentação elétrica, interferência e compatibilidade de sinais." },
      { id: "c2q5", q: "O que é energy harvesting?", a: "Técnica de captar energia do ambiente (solar, vibração, RF) para alimentar dispositivos IoT." },
      { id: "c2q6", q: "O que é ADC/DAC e por que são importantes?", a: "Conversores analógico-digital (ADC) e digital-analógico (DAC) permitem a comunicação entre sensores (analógicos) e processadores (digitais)." },
    ],
  },
  {
    id: "c3",
    title: "SOFTWARE E PROGRAMAÇÃO",
    qas: [
      { id: "c3q1", q: "Linguagens comuns?", a: "C/C++ para firmware, Python/JS para servidores." },
      { id: "c3q2", q: "Como sensores se conectam ao backend?", a: "Via gateways e protocolos como MQTT, HTTP ou CoAP, enviando dados para nuvem ou servidores locais.." },
      { id: "c3q3", q: "Microcontroladores usam sistema operacional?", a: "Nem sempre. Podem usar bare-metal ou sistemas leves como FreeRTOS, Zephyr." },
      { id: "c3q4", q: "O que é modelo publish-subscribe (pub-sub)?", a: "Um padrão onde dispositivos publicam dados e outros se inscrevem para recebê-los, sem conexão direta." },
      { id: "c3q5", q: "Boas práticas de segurança em IoT?", a: "Criptografia, autenticação forte, atualizações regulares e isolamento de rede" },
    ],
  },
  {
    id: "c4",
    title: "REDES E COMUNICAÇÃO",
    qas: [
      { id: "c4q1", q: "Protocolos úteis?", a: "MQTT, HTTP, CoAP, LoRaWAN, BLE." },
      { id: "c4q2", q: "Camadas da comunicação IoT:", a: "Enlace (dados físicos), rede (roteamento/IP), aplicação (protocolo como MQTT)." },
      { id: "c4q3", q: "Como ocorre o roteamento em redes de sensores?", a: "Pode ser fixo, adaptativo ou baseado em consumo de energia; topologias em malha são comuns." },
      { id: "c4q4", q: "O que é edge computing?", a: "Processamento de dados próximo à fonte (dispositivos/sensores) para reduzir latência e carga na nuvem." },
    ],
  },
];

export default function PerguntasRespostas() {
  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(prev => (prev === id ? null : id));

  return (
    <main className="page">
      

      <section className="grid">
        {cards.map(card => (
          <div key={card.id} className="card">
            <div className="card-title">{card.title}</div>

            <div className="qas">
              {card.qas.map(qa => (
                <div key={qa.id} className="q">
                  <button
                    className="q-btn"
                    onClick={() => toggle(qa.id)}
                    aria-expanded={open === qa.id}
                    aria-controls={`ans-${qa.id}`}
                  >
                    <span>{qa.q}</span>
                    <span className={`icon ${open === qa.id ? "rot" : ""}`} aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>

                  <div id={`ans-${qa.id}`} className={`ans ${open === qa.id ? "open" : ""}`} aria-hidden={open !== qa.id}>
                    <p>{qa.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}