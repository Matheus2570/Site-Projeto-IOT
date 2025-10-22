import React from "react";
import Matheus from '../assets/Matheus.jpeg'
import Maria from '../assets/Maria Freire.jpeg'
import Vitor from '../assets/Vitor Gabriel.jpeg'
import Ana from '../assets/Ana Clara.jpeg'
import Laura from '../assets/Laura Marques.jpeg'
import Valentina from '../assets/Valentina.jpeg'

function Equipe() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <div className="container1">
      <h2>👥 Equipe</h2>
      <p>Matheus de Carvalho(Líder)</p>
        <img src={Matheus} alt="imagem Matheus"></img>
        <ul>
          <li>Ficou responsável por:</li>
          <li>Criar a estrutura da base do site (pastas, arquivos e componentes React)</li>
          <li>Fazer o menu de navegação e o rodapé</li>
          <li>Montar a integração entre as seções (links e navegação responsiva)</li>
          <li>Escrever o código da página HOME, com o texto de objetivo e integração multidisciplinar</li>
          <li>Ajudar Maria(vice líder) com o posicionamento dos elementos visuais</li>
          <li>Responsável pelas páginas: HOME e navegação geral</li>
        </ul>
        </div>

         <div className="container2">
        <p>Maria Clara Freire (vice-líder)</p>
        <img src={Maria} alt="imagem Maria Freire"></img>
        <ul>
          <li>Responsável por:</li>
          <li>Escolher o tema visual do site (cores, fontes e estilo)</li>
          <li>Criar as imagens ilustrativas da HOME e do PROJETO</li>
          <li>Fazer o diagrama/fluxograma da seção O Projeto (Sensor → ESP32 → Mosquitto → Cliente MQTT)</li>
          <li>Ajudar a montar os cards visuais das perguntas e respostas</li>
          <li>Deixar o site bonito e coerente com o tema meteorológico</li>
          <li>Responsável pelas páginas: O PROJETO, design visual de todas as páginas</li>
        </ul>
        </div>

        <div className="container3">
        <p>Vitor Gabriel de Paula</p>
        <img src={Vitor} alt="imagem Vitor"></img>
        <ul>
          <li>Responsável por:</li>
          <li>Adicionar a imagem e o link do projeto Wokwi na seção Simulação Wokwi</li>
          <li>Fazer a descrição do circuito eletrônico e dos pinos usados</li>
          <li>Criar a página Hardware, com imagens e descrições dos sensores (DHT11, MQ-135, LEDs, ESP32)</li>
          <li>Revisar as legendas das imagens com Ana Clara</li>
          <li>Responsável pelas páginas: SIMULAÇÃO WOKWI e HARDWARE</li>
        </ul>
        </div>
       
        <div className="container4">
        <p>Ana Clara Zamoner Dias</p>
        <img src={Ana} alt="imagem Ana"></img>
        <ul>
          <li>Responsável por:</li>
          <li>Escrever a explicação da IDE Arduino (configuração, seleção da placa e porta)</li>
          <li>Inserir e comentar o código-fonte do projeto na seção Software</li>
          <li>Fazer a parte de comentários técnicos (explicando cada parte do código)</li>
          <li>Ajudar Vitor a revisar a descrição dos sensores e conexões</li>
          <li>Responsável pela página: SOFTWARE</li>
        </ul>
        </div>
        
        <div className="container5">
        <p>Laura Marques</p>
        <img src={Laura} alt="imagem Laura"></img>
        <ul>
          <li>Responsável por:</li>
          <li>Escrever os textos dos blocos “O Problema” e “A Solução”</li>
          <li>Organizar e revisar a escrita das Perguntas e Respostas, divididas por tema</li>
          <li>Escrever o texto dos Resultados, explicando os aprendizados e o funcionamento final</li>
          <li>Ajudar Maria com os textos das imagens</li>
          <li>Responsável pelas páginas: PERGUNTAS E RESPOSTAS e RESULTADOS</li>
        </ul>
        </div>
       
        <div className="container6">
        <p>Valentina Marcela Martelli</p>
        <img src={Valentina} alt="imagem Valentina"></img>
        <ul>
          <li>Responsável por:</li>
          <li>Montar a seção Resultados, adicionando fotos e vídeo do projeto físico em funcionamento</li>
          <li>Criar a seção Equipe, com fotos, nomes e participações de cada integrante</li>
          <li>Testar o site publicado na Vercel para ver se tudo aparece corretamente</li>
          <li>Fazer a revisão final de ortografia e layout</li>
          <li>Responsável pelas páginas: EQUIPE e apoio na RESULTADOS</li>
          </ul>
          </div>

    </div>
  );
}


export default Equipe;
