import React from "react";
import Matheus from "../assets/Matheus.jpeg";
import Maria from "../assets/Maria Freire.jpeg";
import Vitor from "../assets/Vitor Gabriel.jpeg";
import Ana from "../assets/Ana Clara.jpeg";
import Laura from "../assets/Laura Marques.jpeg";
import Valentina from "../assets/Valentina.png";
import "./equipe.css"; // importa o CSS novo

function Equipe() {
  const membros = [
    {
      nome: "Matheus de Carvalho (Líder)",
      img: Matheus,
      tarefas: [
        "Criar a estrutura da base do site (pastas, arquivos e componentes React)",
        "Fazer o menu de navegação e o rodapé",
        "Montar a integração entre as seções (links e navegação responsiva)",
        "Escrever o código da página HOME, com o texto de objetivo e integração multidisciplinar",
        "Ajudar Maria (vice-líder) com o posicionamento dos elementos visuais",
        "Responsável pelas páginas: HOME e navegação geral",
      ],
    },
    {
      nome: "Maria Clara Freire (Vice-líder)",
      img: Maria,
      tarefas: [
        "Escolher o tema visual do site (cores, fontes e estilo)",
        "Criar as imagens ilustrativas da HOME e do PROJETO",
        "Fazer o diagrama/fluxograma da seção O Projeto (Sensor → ESP32 → Mosquitto → Cliente MQTT)",
        "Ajudar a montar os cards visuais das perguntas e respostas",
        "Deixar o site bonito e coerente com o tema meteorológico",
        "Responsável pelas páginas: O PROJETO, design visual de todas as páginas",
      ],
    },
    {
      nome: "Vitor Gabriel de Paula",
      img: Vitor,
      tarefas: [
        "Adicionar a imagem e o link do projeto Wokwi na seção Simulação Wokwi",
        "Fazer a descrição do circuito eletrônico e dos pinos usados",
        "Criar a página Hardware, com imagens e descrições dos sensores (DHT11, MQ-135, LEDs, ESP32)",
        "Revisar as legendas das imagens com Ana Clara",
        "Responsável pelas páginas: SIMULAÇÃO WOKWI e HARDWARE",
      ],
    },
    {
      nome: "Ana Clara Zamoner Dias",
      img: Ana,
      tarefas: [
        "Escrever a explicação da IDE Arduino (configuração, seleção da placa e porta)",
        "Inserir e comentar o código-fonte do projeto na seção Software",
        "Fazer a parte de comentários técnicos (explicando cada parte do código)",
        "Ajudar Vitor a revisar a descrição dos sensores e conexões",
        "Responsável pela página: SOFTWARE",
      ],
    },
    {
      nome: "Laura Marques",
      img: Laura,
      tarefas: [
        "Escrever os textos dos blocos “O Problema” e “A Solução”",
        "Organizar e revisar a escrita das Perguntas e Respostas, divididas por tema",
        "Escrever o texto dos Resultados, explicando os aprendizados e o funcionamento final",
        "Ajudar Maria com os textos das imagens",
        "Responsável pelas páginas: PERGUNTAS E RESPOSTAS e RESULTADOS",
      ],
    },
    {
      nome: "Valentina Marcela Martelli",
      img: Valentina,
      tarefas: [
        "Montar a seção Resultados, adicionando fotos e vídeo do projeto físico em funcionamento",
        "Criar a seção Equipe, com fotos, nomes e participações de cada integrante",
        "Testar o site publicado na Vercel para ver se tudo aparece corretamente",
        "Fazer a revisão final de ortografia e layout",
        "Responsável pelas páginas: EQUIPE e apoio na RESULTADOS",
      ],
    },
  ];

  return (
    <div className="equipe-page">
  
      <div className="equipe-container">
        {membros.map((membro, index) => (
          <div className="equipe-card" key={index}>
            <img src={membro.img} alt={`Foto de ${membro.nome}`} />
            <h3>{membro.nome}</h3>
            <ul>
              {membro.tarefas.map((tarefa, i) => (
                <li key={i}>{tarefa}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Equipe;
