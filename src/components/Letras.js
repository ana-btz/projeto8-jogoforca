function Letras({ erros, setErros, palavra, palavraEmJogo, setPalavraEmJogo }) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const letrasSelecionadas = [];
    const palavraAtualizada = [];

    function selecionaBotao(letra) {
        if (palavra.includes(letra)) {
            letrasSelecionadas.push(letra);
            console.log(letrasSelecionadas)

            for (let i = 0; i < palavra.length; i++) {
                if (letra === palavra[i]) {
                    palavraEmJogo[i] = letra;
                    palavraAtualizada.push(letra);
                } else {
                    palavraAtualizada.push(palavraEmJogo[i]);
                }

                setPalavraEmJogo(palavraAtualizada);
            }
        } else {
            setErros(erros + 1);
        }
    }

    return (
        <div className="letras">
            {/* <div className="desabilitado"></div> */}
            {alfabeto.map((letra) =>
                <button
                    className={``}
                    disabled={palavra.length === 0}
                    onClick={() => selecionaBotao(letra)}
                >
                    {letra.toUpperCase()}
                </button>)}
        </div>
    )
}

export default Letras;