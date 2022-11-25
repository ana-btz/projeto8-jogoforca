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
  console.log(`erros: ${erros}`);
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
        erros={erros}
        setErros={setErros}
        palavra={palavra}
        palavraEmJogo={palavraEmJogo}
        setPalavraEmJogo={setPalavraEmJogo}
      />
      <Chute
        palavra={palavra}
      />
    </div>
  );
}

export default App;
