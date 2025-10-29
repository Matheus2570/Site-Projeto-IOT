// src/pages/home.js
import React from "react";
import "./home.css";
import EstacaoMeterologica from "../assets/EstacaoMeterologica.jpeg";

function Home() {
  return (
    <div className="home-container">

      {/* Objetivo do Projeto */}
      <div className="objetivo-projeto">
        <h2>🎯 Objetivo do Projeto</h2>
        <div className="bloco-objetivo">
          <p>
            Nosso objetivo é desenvolver uma estação meteorológica IOT que
            possibilite monitoramento em tempo real das condições atmosféricas,
            integrando sensores e análise de dados para auxiliar na previsão do
            clima, utilizando informações de umidade, temperatura e gases de
            todas as estações conectadas, além de servir como ferramenta
            educacional.
          </p>
        </div>
      </div>

      {/* Integração Multidisciplinar */}
      <div className="integracao-multidisciplinar">
        <h2>🔗 Integração Multidisciplinar</h2>
        <div className="blocos-integracao">
          <div className="bloco">
            💻 Sistemas Operacionais: Gerenciamento de processos e multitarefas no ESP32
          </div>
          <div className="bloco">
            🌐 Arquitetura de Redes e IoT: Protocolo MQTT e comunicação via Wi-Fi
          </div>
          <div className="bloco">
            🧠 Lógica de Programação: Algoritmos de leitura e processamento de dados
          </div>
          <div className="bloco">
            📝 Levantamento de Requisitos: Análise e especificações do sistema IoT
          </div>
        </div>
      </div>

      {/* Imagem + Explicação */}
      <div className="bloco-imagem-explicacao tema-bloco">
        <h2>📸 Foto da Estação Meteorológica</h2>
        <div className="conteudo-imagem-explicacao">
          <div className="imagem-container">
            <img src={EstacaoMeterologica} alt="Estação Meteorológica" />
          </div>

          <div className="explicacao-container">
            <p>
              Nessa foto, todos os 3 LEDs do projeto estão acesos: 🔴 Umidade, 🟢 Temperatura e 🟡 Gás.
              Utilizamos um papel queimado para simular o aumento de temperatura e gás, demonstrando como
              os sensores detectam mudanças ambientais em tempo real. O microcontrolador ESP32 processa
              os dados recebidos dos sensores e aciona os LEDs conforme os valores medidos.
              Essa demonstração mostra de forma prática a integração entre sensores, hardware e software,
              reforçando o caráter educativo do projeto e a aplicação da estação meteorológica para monitoramento ambiental.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;
