import React from "react";
import "./oProjeto.css";
import FluxodeDados from "../assets/FluxodeDados.jpeg";
import Capivara from "../assets/CapivaraEstimacao.jpeg";

function OProjeto() {
  return (
    <div className="o-projeto">
      {/* Problema e Solução */}
      <section className="problema-solucao">
        <div className="problema">
          <h3>⚠️ Problema</h3>
          <p>
            Em muitas fábricas, os funcionários estão expostos a gases, poeiras e partículas no ar
            que podem causar problemas respiratórios sérios, alergias ou até doenças crônicas.
            A falta de monitoramento contínuo dificulta a tomada de decisões rápidas para proteger
            a saúde dos trabalhadores. Além disso, ambientes industriais sem controle adequado de ar
            podem reduzir a produtividade e aumentar o risco de acidentes.
            Nosso projeto pode ajudar a identificar esses problemas em tempo real, permitindo ações preventivas.
          </p>
        </div>

        <div className="solucao">
          <h3>✅ Solução</h3>
          <p>
            Desenvolvemos uma estação meteorológica IoT capaz de medir gases, temperatura e umidade em tempo real
            dentro da fábrica. O sistema pode alertar supervisores ou trabalhadores sobre níveis perigosos,
            acionar ventilação automática, recomendar o uso de máscaras ou até limitar a exposição em determinadas áreas.
            Isso garante mais segurança, saúde e produtividade, mostrando como a tecnologia IoT pode transformar
            ambientes de trabalho industriais.
          </p>
        </div>
      </section>

      {/* Fluxo de Dados */}
      <section className="fluxo-dados">
        <h3>🔄 Fluxo de Dados</h3>
        <img src={FluxodeDados} alt="Fluxo de Dados do Projeto IoT" />
      </section>

      {/* Capivara */}
      <section className="capivara">
        <h3>🦫 Nossa Capivara de Estimação</h3>
        <p>Nossa capivara curiosa mexendo na estação meteorológica!</p>
        <img src={Capivara} alt="Capivara mexendo na estação" />
      </section>
    </div>
  );
}

export default OProjeto;
