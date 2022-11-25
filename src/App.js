import React, { useState } from "react"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import palavras from "./palavras" // array de strings ---> palavras que o jogador devera advinhar

function App() {
  // variaveis de estado
  const
    [palavra, setPalavra] = useState(""),
    [palavraEmJogo, setPalavraEmJogo] = useState(""),
    [erros, setErros] = useState(0);

  // apertar "escolher palavra"
  // iniciar jogo

  console.log(`palavra: ${palavra}`);
  console.log(`palavraEmJogo: ${palavraEmJogo}`);
  // input e letras ficam habilitadas

  return (
    <div className="fundo">
      <Jogo
        erros={erros}
        palavra={palavra}
        palavras={palavras}
        palavraEmJogo={palavraEmJogo}
        setPalavra={setPalavra}
        setPalavraEmJogo={setPalavraEmJogo}
      />
      <Letras
        palavra={palavra}
      />
      <Chute
        palavra={palavra}
      />
    </div>
  );
}

export default App;
