import React, { useState } from "react"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import palavras from "./palavras" // array de strings ---> palavras que o jogador devera advinhar

function App() {
  // variaveis de estado
  const
    [erros, setErros] = useState(0),
    [palavra, setPalavra] = useState(""),
    [desabilitado, setDesabilitado] = useState("desabilitado"),
    [palavraEmJogo, setPalavraEmJogo] = useState(""),
    [letrasAcertadas, setLetrasAcertadas] = useState([]),
    [letrasSelecionadas, setLetrasSelecionadas] = useState([]);

  // apertar "escolher palavra"
  // iniciar jogo

  console.log(`palavra: ${palavra}`);
  console.log(`palavraEmJogo: ${palavraEmJogo}`);
  console.log(`erros: ${erros}`);
  // input e letras ficam habilitadas

  return (
    <div className="fundo">
      <Jogo
        erros={erros}
        palavra={palavra}
        palavras={palavras}
        desabilitado={desabilitado}
        setDesabilitado={setDesabilitado}
        palavraEmJogo={palavraEmJogo}
        setPalavra={setPalavra}
        setPalavraEmJogo={setPalavraEmJogo}
      />
      <Letras
        erros={erros}
        setErros={setErros}
        palavra={palavra}
        desabilitado={desabilitado}
        setDesabilitado={setDesabilitado}
        palavraEmJogo={palavraEmJogo}
        setPalavraEmJogo={setPalavraEmJogo}
        letrasAcertadas={letrasAcertadas}
        setLetrasAcertadas={setLetrasAcertadas}
        letrasSelecionadas={letrasSelecionadas}
        setLetrasSelecionadas={setLetrasSelecionadas}
      />
      <Chute
        palavra={palavra}
      />
    </div>
  );
}

export default App;
