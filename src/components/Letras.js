function Letras({ letrasSelecionadas, setLetrasSelecionadas, erros, setErros, palavra, setPalavra, desabilitado, setCorPalavra, setDesabilitado, palavraEmJogo, setPalavraEmJogo }) {
    const
        alfabeto =
            [
                "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
            ],
        palavraAtualizada = [];

    function selecionaBotao(letra) {
        const letrasClicadas = [...letrasSelecionadas, letra];
        setLetrasSelecionadas(letrasClicadas);
        console.log(`letrasClicadas: ${letrasClicadas}`);

        const contador = erros + 1;
        const resetPalavra = "";
        console.log(`contador: ${contador}`);
        console.log(`erros: ${erros}`);

        if (contador < 6) {

            if (palavra.includes(letra)) {

                for (let j = 0; j < palavra.length; j++) {

                    if (letra === palavra[j]) {
                        palavraEmJogo[j] = letra;
                        palavraAtualizada.push(letra);
                        console.log(`palavraAtualizada: ${palavraAtualizada}`)
                    } else {
                        palavraAtualizada.push(palavraEmJogo[j]);
                        console.log(`palavraAtualizada: ${palavraAtualizada}`);
                    }
                    setPalavraEmJogo(palavraAtualizada);
                }

                if (palavra.join("") == palavraAtualizada.join("")) {
                    // ganhou o jogo
                    setCorPalavra("verde");

                    setPalavra(resetPalavra);
                    setDesabilitado("desabilitado");
                    setPalavraEmJogo(palavra);
                }

            } else {
                setErros(contador);
            }

        } else {
            // erros chegam a 6
            // perdeu o jogo

            console.log(`contador: ${contador}`);

            setCorPalavra("vermelho");
            setErros(contador);

            setPalavra(resetPalavra);
            setDesabilitado("desabilitado");
            setPalavraEmJogo(palavra);
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
                    onClick={(e) => selecionaBotao(letra, e.target)}
                >
                    {letra.toUpperCase()}
                </button>)}
        </div>
    )
}

export default Letras;