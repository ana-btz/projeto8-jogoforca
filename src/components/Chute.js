function Chute(
    {
        chute, palavra, setPalavra, setChute, setPalavraEmJogo, setCorPalavra, setDesabilitado, setErros
    }
) {
    function tratarInput() {
        const palavraStr = palavra.join(""); // transforma palavra em str
        const input = chute.toLowerCase();

        if (isNaN(Number(input))) { // se input for um numero, nao faz nada

            if (input === palavraStr) {
                setPalavra("");
                setDesabilitado("desabilitado");
                setCorPalavra("verde");
                setPalavraEmJogo(palavra);

            } else {
                setPalavra("");
                setDesabilitado("desabilitado");
                setCorPalavra("vermelho");
                setPalavraEmJogo(palavra);
                setErros(6);
            }
        }

        setChute("");
    }

    function tratarKeyDown(e) {
        if (e.key === "Enter" && e.target.value.length !== 0) {
            tratarInput();
        }
    }

    return (
        <div className="chute">
            <h1>Já sei a palavra!</h1>
            <input data-test="guess-input"
                value={chute}
                disabled={palavra.length === 0}
                onChange={(e) => setChute(e.target.value)}
                onKeyDown={(e) => tratarKeyDown(e)}
            />
            <button data-test="guess-button"
                disabled={palavra.length === 0}
                onClick={tratarInput}>Chutar</button>
        </div>
    )
}

export default Chute;