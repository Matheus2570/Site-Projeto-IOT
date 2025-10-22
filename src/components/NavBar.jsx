// components/NavBar.jsx
import { Link, useLocation } from "react-router-dom"; 
import { useState } from "react"; 
import "./NavBar.css"; 
import BotaoMudarTema from "./botaoMudaTema"; 

export default function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation(); // pega a rota atual

  const alternarMenu = () => setMenuAberto(!menuAberto);
  const handleClick = () => setMenuAberto(false);

  // Map de rotas para títulos
  const titulos = {
    "/": "Página Principal",
     "/o-projeto": "O Projeto",
    "/simulacao-wokwi": "Simulação Wokwi",
    "/hardware": "Hardware",
    "/software": "Software",
    "/perguntas-respostas": "Perguntas e Respostas",
    "/resultados": "Resultados",
    "/equipe": "Equipe",
  };

  const tituloAtual = titulos[location.pathname] || "Estação Meterológica";

  return (
    <nav className="navBar">
      <div className="navTopo">
        <h1 className="tituloSite">{tituloAtual}</h1>
        <div className="tituloComBotao">
          <i
            className={menuAberto ? "bx bx-menu-alt-right" : "bx bx-menu"}
            onClick={alternarMenu}
            style={{ cursor: "pointer" }}
          ></i>
          <BotaoMudarTema />
        </div>
      </div>

      {menuAberto && (
        <div id="menu-opcoes" className="menu-opcoes">
          <ul>
            <li><Link to="/" onClick={handleClick} className="navLink">🏠 Página Principal</Link></li>
            <li><Link to="/o-projeto" onClick={handleClick} className="navLink">📄 O Projeto</Link></li>
            <li><Link to="/simulacao-wokwi" onClick={handleClick} className="navLink">🖥 Simulação Wokwi</Link></li>
            <li><Link to="/hardware" onClick={handleClick} className="navLink">🔧 Hardware</Link></li>
            <li><Link to="/software" onClick={handleClick} className="navLink">💾 Software</Link></li>
            <li><Link to="/perguntas-respostas" onClick={handleClick} className="navLink">❓ Perguntas e Respostas</Link></li>
            <li><Link to="/resultados" onClick={handleClick} className="navLink">📊 Resultados</Link></li>
            <li><Link to="/equipe" onClick={handleClick} className="navLink">👥 Equipe</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
