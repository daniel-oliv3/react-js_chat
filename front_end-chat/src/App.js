import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

let socket;

function App() {

  const ENDPOINT = "http://localhost:8080/";

  const [logado] = useState(false);
  const [nome, setNome] = useState("");
  const [sala, setSala] = useState("");

  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
  }, []); 

  const conectarSala = () => {
    console.log("Acessou a sala " + sala + " com o usuário " + nome);
  }

  return (
    <div>
      <h1>Chat - Sapup3</h1>
      {!logado ? 
      <>
        <label>Nome: </label>
        <input type="text" placeholder="Nome" name="nome" value={nome} onChange={(texto) => {setNome(texto.target.value)}}/><br/><br/>

        <label>Sala: </label>
        {/*<input type="text" placeholder="Sala" value={sala} onChange={(text) => {setSala(text.target.value)}}/> */}

        <select name="sala" value={sala} onChange={texto => setSala(texto.target.value)}>
          <option value="">Selecione</option>
          <option value="1">Node Js</option>
          <option value="2">React Js</option>
          <option value="3">React Native</option>
          <option value="4">PHP</option>
        </select><br/><br/>

        <button onClick={conectarSala}>Acessar</button>
      </>
      : "Logado"}
    </div>
  );
}

export default App;
