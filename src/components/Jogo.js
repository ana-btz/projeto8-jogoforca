function Jogo(
    {
        erros,
        palavra,
        palavras,
        setErros,
        corPalavra,
        setPalavra,
        setCorPalavra,
        setDesabilitado,
        setPalavraEmJogo,
        palavraEmJogo
    }
) {
    let i = Math.floor(Math.random() * palavras.length);
    const palavraSorteada = (palavras[i].split(""));
    const palavraRenderizada = [];

    function iniciarJogo() {
        for (let j = 0; j < palavraSorteada.length; j++) {
            palavraRenderizada.push("_ ");
        }

        setErros(0);
        setCorPalavra("");
        setPalavra(palavraSorteada);
        setDesabilitado("habilitado");
        setPalavraEmJogo(palavraRenderizada);
    }

    return (
        <div className="jogo">
            <div className="imagem">
                <img data-test="game-image" src={erros ? `/assets/forca${erros}.png` : ""}></img>
            </div>
            <button data-test="choose-word" onClick={iniciarJogo}>
                Escolher Palavra
            </button>
            <h1 data-test="word" data-answer={palavra ? palavra.join("") : ""} className={corPalavra}>
                {palavraEmJogo}
            </h1>
        </div>
    )
}

export default Jogo;