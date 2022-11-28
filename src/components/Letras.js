function Letras({
    erros,
    setErros,
    palavra,
    setPalavra,
    desabilitado,
    setCorPalavra,
    setDesabilitado,
    palavraEmJogo,
    setPalavraEmJogo,
    letrasSelecionadas,
    setLetrasSelecionadas
}
) {
    const
        alfabeto = [
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ],
        palavraAtualizada = [],
        contador = erros + 1,
        limErros = 6;

    function vitoria() {
        setPalavra("");
        setCorPalavra("verde");
        setDesabilitado("desabilitado");
        setPalavraEmJogo(palavra);
    }

    function derrota() {
        setCorPalavra("vermelho");
        setErros(contador);
        setPalavra("");
        setDesabilitado("desabilitado");
        setPalavraEmJogo(palavra);
    }

    function atualizarPalavraEmJogo(letra) {
        for (let i = 0; i < palavra.length; i++) {
            if (letra === palavra[i]) {
                palavraEmJogo[i] = letra;
                palavraAtualizada.push(letra);
            } else {
                palavraAtualizada.push(palavraEmJogo[i]);
            }
            setPalavraEmJogo(palavraAtualizada);
        }
        if (palavra.join("") === palavraAtualizada.join("")) {
            vitoria();
        }
    }

    function selecionaBotao(letra) {
        const letrasClicadas = [...letrasSelecionadas, letra];
        setLetrasSelecionadas(letrasClicadas);

        if (contador < limErros) {
            if (palavra.includes(letra)) {
                atualizarPalavraEmJogo(letra);
            } else {
                setErros(contador);
            }
        } else if (contador === 6 && palavra.includes(letra)) {
            atualizarPalavraEmJogo(letra);
        } else {
            derrota();
        }
    }

    return (
        <div className="letras">
            {alfabeto.map((letra) =>
                <button
                    data-test="letter"
                    key={letra}
                    className={letrasSelecionadas.includes(letra) ? "desabilitado" : desabilitado}
                    disabled={letrasSelecionadas.includes(letra) || palavra === ""}
                    onClick={(e) => selecionaBotao(letra)}
                >
                    {letra.toUpperCase()}
                </button>)}
        </div>
    );
}

export default Letras;