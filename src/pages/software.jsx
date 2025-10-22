import './software.css';
import React, { useState } from 'react';

export default function Software() {
  const codigo = `#include <WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>

// -------------------- CONFIGURAÇÕES DE HARDWARE --------------------
#define LED_TEMPERATURA 19  // LED para temperatura
#define LED_UMIDADE 20      // LED para umidade
#define LED_GAS 21          // LED para gás
#define PINAOUT 2           // Pino analógico do sensor de gás

#define DHT_PIN 8           // Pino do sensor DHT
#define DHT_TYPE DHT11     // ou DHT11, se preferir
const int LIMITE_GAS = 500;

DHT dht(DHT_PIN, DHT_TYPE);

// -------------------- CONFIGURAÇÕES DE REDE --------------------
// Substitua pelos dados da sua rede
const char* WIFI_SSID = "AP360_SENAI";    // Ex: "HotspotDoCelular"
const char* WIFI_PASS = "Senai123";  // Ex: "12345678"

// -------------------- CONFIGURAÇÕES MQTT LOCAL --------------------
// Substitua pelo IP do notebook onde o Mosquitto está rodando
const char* MQTT_SERVER = "Coloque o IP da Maquina Aqui";  // IP do notebook
const int MQTT_PORT = 1883;
const char* CLIENT_ID = "ESP32-Grupo5";   // ID único do ESP32

// Tópicos de publicação
#define TOPIC_TEMP "aulas/fisico/grupo5/temperatura"
#define TOPIC_HUM  "aulas/fisico/grupo5/umidade"
#define TOPIC_GAS  "aulas/fisico/grupo5/gas"

// -------------------- OBJETOS E VARIÁVEIS --------------------
WiFiClient espClient;
PubSubClient mqttClient(espClient);

unsigned long lastMsg = 0;
const long PUBLISH_INTERVAL = 5000; // 5 segundos

float Temperatura = 0.0;
float Umidade = 0.0;

// -------------------- FUNÇÕES --------------------
void setup_wifi() {
  delay(10);
  Serial.print("Conectando a rede: ");
  Serial.println(WIFI_SSID);

  WiFi.begin(WIFI_SSID, WIFI_PASS);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\n✅ WiFi Conectado!");
  Serial.print("Endereço IP: ");
  Serial.println(WiFi.localIP());
}

void reconnect_mqtt() {
  while (!mqttClient.connected()) {
    Serial.print("Tentando conexão MQTT no IP: ");
    Serial.println(MQTT_SERVER);

    if (mqttClient.connect(CLIENT_ID)) {
      Serial.println(" Conectado ao broker!");
    } else {
      Serial.print(" Falha, rc=");
      Serial.print(mqttClient.state());
      Serial.println(" - Tentando novamente em 5 segundos...");
      delay(5000);
    }
  }
}

void publish_data(const char* topic, float value) {
  char payload[10];
  snprintf(payload, sizeof(payload), "%.2f", value);
  mqttClient.publish(topic, payload);
  Serial.print("Publicado em ");
  Serial.print(topic);
  Serial.print(": ");
  Serial.println(payload);
}

// -------------------- SETUP --------------------
void setup() {
  Serial.begin(115200);
  delay(2000);

  Serial.println("🚀 Iniciando sistema de monitoramento...");

  pinMode(LED_TEMPERATURA, OUTPUT);
  pinMode(LED_UMIDADE, OUTPUT);
  pinMode(LED_GAS, OUTPUT);
  pinMode(PINAOUT, INPUT);

  dht.begin();
  Serial.println("Sensor DHT iniciado com sucesso.");

  setup_wifi();
  mqttClient.setServer(MQTT_SERVER, MQTT_PORT);
}

// -------------------- LOOP --------------------
void loop() {
  if (!mqttClient.connected()) reconnect_mqtt();
  mqttClient.loop();

  unsigned long now = millis();
  if (now - lastMsg > PUBLISH_INTERVAL) {
    lastMsg = now;

    Temperatura = dht.readTemperature();
    Umidade = dht.readHumidity();
    int valorgas = analogRead(PINAOUT);

    if (isnan(Temperatura) || isnan(Umidade)) {
      Serial.println("⚠️ Erro na leitura do DHT. Tentando reinicializar...");
      dht.begin();
      delay(2000);
      return;
    }

    // Sensor de gás
    if (valorgas > LIMITE_GAS) {
      digitalWrite(LED_GAS, HIGH);
      Serial.println("🚨 Cuidado! Gás tóxico detectado.");
    } else {
      digitalWrite(LED_GAS, LOW);
      Serial.println("✅ Ambiente seguro para gás.");
    }
    Serial.print("Valor do gás: ");
    Serial.println(valorgas);

    // Temperatura
    Serial.print("🌡️  Temperatura: ");
    Serial.print(Temperatura);
    Serial.println(" ºC");

    if (Temperatura > 30 || Temperatura < 15) {
      digitalWrite(LED_TEMPERATURA, HIGH);
      Serial.println("⚠️ Alerta: Temperatura fora do normal!");
    } else {
      digitalWrite(LED_TEMPERATURA, LOW);
      Serial.println("Temperatura OK.");
    }

    // Umidade
    Serial.print("💧 Umidade: ");
    Serial.print(Umidade);
    Serial.println(" %");

    if (Umidade < 30 || Umidade > 70) {
      digitalWrite(LED_UMIDADE, HIGH);
      Serial.println("⚠️ Alerta: Umidade fora do normal!");
    } else {
      digitalWrite(LED_UMIDADE, LOW);
      Serial.println("Umidade OK.");
    }

    // Publicação MQTT
    publish_data(TOPIC_TEMP, Temperatura);
    publish_data(TOPIC_HUM, Umidade);
    publish_data(TOPIC_GAS, valorgas);

    Serial.println("---------------------------------");
  }
}
`;

  const [copiado, setCopiado] = useState(false);

  const copiarCodigo = () => {
    navigator.clipboard.writeText(codigo);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="arduino-page">
           <div className="section ide-arduino">
        <h2>IDE Arduino</h2>
        <p>
          A IDE Arduino (Integrated Development Environment) é uma plataforma de desenvolvimento de código aberto que facilita a programação de microcontroladores. Utilizamos a IDE Arduino para desenvolver o código que controla o ESP32 e gerencia todos os componentes do projeto.
        </p>
        <h3>Por que usar a IDE Arduino?</h3>
        <ul className='lista'>
          <li>Interface simples e intuitiva</li>
          <li>Grande quantidade de bibliotecas disponíveis</li>
          <li>Comunidade ativa e vasta documentação</li>
          <li>Suporte para ESP32 através de pacotes adicionais</li>
          <li>Compilação e upload simplificados</li>
        </ul>
      </div>

      {/* Seção Configuração da IDE */}
      <div className="section config-ide">
        <h2>Configuração da IDE</h2>
        <ol>
          <li>
            <strong>Instalação do Suporte ao ESP32:</strong> Em <strong>Arquivo → Preferências</strong>, adicione a URL do gerenciador de placas ESP32: <br />
           <pre className="code-link">
  <code>https://dl.espressif.com/dl/package_esp32_index.json</code>
</pre>

          </li>
          <li>
            <strong>Instalação da Placa ESP32:</strong> Acesse <strong>Ferramentas → Placa → Gerenciador de Placas</strong>, busque por "ESP32" e instale o pacote <strong>esp32 by Espressif Systems</strong>.
          </li>
          <li>
            <strong>Instalação de Bibliotecas:</strong> Acesse <strong>Sketch → Incluir Biblioteca → Gerenciar Bibliotecas</strong> e instale:
            <ul>
              <li>DHT sensor library - Para o sensor DHT11</li>
              <li>PubSubClient - Para comunicação MQTT</li>
              <li>WiFi - Para conexão Wi-Fi (já incluída no pacote ESP32)</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Seção Seleção de Board e Porta */}
      <div className="section board-porta">
        <h2>Seleção de Board e Porta</h2>
        <div className='bloquinhos'>
        <div className='bloquinho1'>
        <h3>Board (Placa)</h3>
        <p>
          Vá em <strong>Ferramentas → Placa</strong> e selecione:
        </p>
        <p className="highlight">ESP32 Dev Module</p>
        <p>Esta é a configuração padrão para a maioria das placas ESP32.</p>
        </div>
        <div className='bloquinho2'>
        <h3>Porta Serial</h3>
        <p>
          Conecte o ESP32 via USB e selecione em <strong>Ferramentas → Porta</strong>:
        </p>
        <p className="highlight">COM3, COM4... (Windows)</p>
        </div>
        </div>
      </div>

      <div className="codigo-fonte">
        <h1>CÓDIGO FONTE</h1>
        <div className="codigo-box">
          <button onClick={copiarCodigo}>
            {copiado ? "✅ Copiado!" : "📋 Copiar código"}
          </button>
          <pre>
            <code>{codigo}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
