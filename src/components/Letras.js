function Letras(
    {
        erros,
        setErros,
        palavra,
        setPalavra,
        desabilitado,
        setDesabilitado,
        palavraEmJogo,
        setPalavraEmJogo,
        letrasAcertadas,
        setLetrasAcertadas,
        letrasSelecionadas,
        setLetrasSelecionadas
    }
) {
    const
        alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        palavraAtualizada = [];

    function desabilitarBotao(elemento) {
        elemento.classList.add("desabilitado");
        elemento.disabled = desabilitado;
    }

    function selecionaBotao(letra, elemento) {
        // console.log(letra)
        // const letrasClicadas = [...letrasSelecionadas, letra];
        // setLetrasSelecionadas(letrasClicadas);
        // console.log(`letrasClicadas: ${letrasClicadas}`);
        const contador = erros + 1;
        const resetPalavra = "";

        if (contador < 6) {
            console.log(`contador: ${contador}`);
            desabilitarBotao(elemento);

            if (palavra.includes(letra)) {

                for (let j = 0; j < palavra.length; j++) {
                    if (letra === palavra[j]) {
                        palavraEmJogo[j] = letra;
                        palavraAtualizada.push(letra);
                    } else {
                        palavraAtualizada.push(palavraEmJogo[j]);
                    }

                    setPalavraEmJogo(palavraAtualizada);
                }
            } else {
                setErros(contador);
            }
        } else {
            desabilitarBotao(elemento);
            console.log(`contador: ${contador}`);

            setErros(contador);
            setPalavra(resetPalavra);
            setDesabilitado("desabilitado");
        }
    }

    return (
        <div className="letras">
            {/* <div className="desabilitado"></div> */}
            {alfabeto.map((letra) =>
                <button
                    className={desabilitado}
                    disabled={palavra === ""}
                    onClick={(e) => selecionaBotao(letra, e.target)}
                >
                    {letra.toUpperCase()}
                </button>)}
        </div>
    )
}

export default Letras;