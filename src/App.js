import React, { useState } from "react"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import palavras from "./palavras"

function App() {
  // variaveis de estado
  const
    [erros, setErros] = useState(0),
    [chute, setChute] = useState(""),
    [palavra, setPalavra] = useState(""),
    [corPalavra, setCorPalavra] = useState(""),
    [palavraEmJogo, setPalavraEmJogo] = useState(""),
    [letrasAcertadas, setLetrasAcertadas] = useState([]),
    [desabilitado, setDesabilitado] = useState("desabilitado"),
    [letrasSelecionadas, setLetrasSelecionadas] = useState([]);

  // console.log(`erros: ${erros}`);
  console.log(`chute: ${chute}`);
  console.log(`palavra: ${palavra}`);
  console.log(`palavraEmJogo: ${palavraEmJogo}`);
  // console.log(`letrasAcertadas: ${letrasAcertadas}`);

  return (
    <div className="fundo">
      <Jogo
        erros={erros}
        setErros={setErros}
        palavra={palavra}
        palavras={palavras}
        setPalavra={setPalavra}
        corPalavra={corPalavra}
        setCorPalavra={setCorPalavra}
        palavraEmJogo={palavraEmJogo}
        setPalavraEmJogo={setPalavraEmJogo}
        setDesabilitado={setDesabilitado}
      />
      <Letras
        erros={erros}
        setErros={setErros}
        palavra={palavra}
        setPalavra={setPalavra}
        desabilitado={desabilitado}
        setCorPalavra={setCorPalavra}
        setDesabilitado={setDesabilitado}
        palavraEmJogo={palavraEmJogo}
        setPalavraEmJogo={setPalavraEmJogo}
      />
      <Chute
        chute={chute}
        palavra={palavra}
        setPalavra={setPalavra}
        setCorPalavra={setCorPalavra}
        setPalavraEmJogo={setPalavraEmJogo}
        setChute={setChute}
        setDesabilitado={setDesabilitado}
        setErros={setErros}
      />
    </div>
  );
}

export default App;
