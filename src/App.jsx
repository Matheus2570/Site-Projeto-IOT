import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importação das páginas
import Home from "./pages/home";
import OProjeto from "./pages/oProjeto";
import SimulacaoWokwi from "./pages/simulacaoWokwi";
import Hardware from "./pages/hardware";
import Software from "./pages/software";
import PerguntasRespostas from "./pages/perguntasRespostas";
import Resultados from "./pages/resultados";
import Equipe from "./pages/equipe";

// Importação dos componentes
import NavBar from "./components/NavBar";
import Footer from "./components/footer";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-projeto" element={<OProjeto />} />
        <Route path="/simulacao-wokwi" element={<SimulacaoWokwi />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/software" element={<Software />} />
        <Route path="/perguntas-respostas" element={<PerguntasRespostas />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/equipe" element={<Equipe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
