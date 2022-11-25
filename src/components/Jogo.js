function Jogo({ palavra, palavras, setPalavra, setPalavraEmJogo, palavraEmJogo }) {

    function iniciarJogo() {
        let indice = Math.floor(Math.random() * palavras.length);
        const palavraSorteada = (palavras[indice].split(""));
        const palavraRenderizada = [];

        setPalavra(palavraSorteada);

        for (let i = 0; i < palavraSorteada.length; i++) {
            palavraRenderizada.push("_ ");
        }

        setPalavraEmJogo(palavraRenderizada);

        // console.log(`palavraSorteada: ${palavraSorteada}`);
        // console.log(`palavraRenderizada: ${palavraRenderizada}`);
    }

    return (
        <div className="jogo">
            <div className="imagem">
                <img src=""></img>
            </div>
            <button onClick={iniciarJogo}>Escolher Palavra</button>
            <h1>{palavraEmJogo}</h1>
        </div>
    )
}

export default Jogo;