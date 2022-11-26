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
    [desabilitado, setDesabilitado] = useState("desabilitado"),
    [palavraEmJogo, setPalavraEmJogo] = useState(""),
    [letrasAcertadas, setLetrasAcertadas] = useState([]),
    [letrasSelecionadas, setLetrasSelecionadas] = useState([]);

  // console.log(`erros: ${erros}`);
  console.log(`chute: ${chute}`);
  console.log(`palavra: ${palavra}`);
  console.log(`palavraEmJogo: ${palavraEmJogo}`);
  console.log(`letrasAcertadas: ${letrasAcertadas}`);

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
        setPalavra={setPalavra}
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
        chute={chute}
        palavra={palavra}
        setChute={setChute}
      />
    </div>
  );
}

export default App;
