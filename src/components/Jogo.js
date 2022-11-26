function Jogo(
    {
        erros,
        palavra,
        palavras,
        corPalavra,
        setPalavra,
        desabilitado,
        setCorPalavra,
        setDesabilitado,
        setPalavraEmJogo,
        palavraEmJogo
    }
) {
    function iniciarJogo() {

        setDesabilitado("habilitado"); // habilita os botoes e o input
        setCorPalavra("");

        let i = Math.floor(Math.random() * palavras.length); // numero aleatorio
        const palavraSorteada = (palavras[i].split("")); // palavra sorteada
        const palavraRenderizada = []; // armazena os underlines e/ou letras conforme jogamos

        setPalavra(palavraSorteada); // armazena a palavra sorteada no estado "palavra"

        for (let j = 0; j < palavraSorteada.length; j++) {
            palavraRenderizada.push("_ ");
        }

        setPalavraEmJogo(palavraRenderizada);

        // console.log(`palavraSorteada: ${palavraSorteada}`);
        // console.log(`palavraRenderizada: ${palavraRenderizada}`);
    }

    return (
        <div className="jogo">
            <div className="imagem">
                <img src={erros ? `/assets/forca${erros}.png` : ""}></img>
            </div>
            <button onClick={iniciarJogo}>Escolher Palavra</button>
            <h1 className={corPalavra}>{palavraEmJogo}</h1>
        </div>
    )
}

export default Jogo;