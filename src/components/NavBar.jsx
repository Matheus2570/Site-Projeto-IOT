// components/NavBar.jsx
import { Link } from "react-router-dom"; 
import { useState } from "react"; 
import "./NavBar.css"; 
import BotaoMudarTema from "./botaoMudaTema"; 

export default function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const handleClick = () => {
    setMenuAberto(false);
  };

  return (
    <nav className="navBar">
      <div className="navTopo">
        <h1 className="tituloSite">Estação Meterológica</h1>
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
