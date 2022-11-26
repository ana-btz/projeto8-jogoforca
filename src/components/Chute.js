function Chute({ chute, palavra, setPalavra, setChute, setPalavraEmJogo, setCorPalavra, setDesabilitado }) {
    function tratarInput() {
        const palavraStr = palavra.join(""); // transforma palavra em str
        const input = chute.toLowerCase();
        const resetPalavra = "";
        const corVitoria = "";
        const corDerrota = "";

        if (input === palavraStr) {
            alert("parabens vc acertou");

            setPalavra(resetPalavra);
            setDesabilitado("desabilitado");
            setCorPalavra("verde");

        } else {
            alert("erraste");

            setCorPalavra("vermelho");
        }

        setChute("");
    }

    function tratarKeyDown(e) {
        if (e.key === "Enter") {
            tratarInput();
        }
    }

    return (
        <div className="chute">
            {/* <div className="desabilitado"></div> */}
            <h1>Já sei a palavra!</h1>
            <input
                value={chute}
                disabled={palavra.length === 0}
                onChange={(e) => setChute(e.target.value)}
                onKeyDown={(e) => tratarKeyDown(e)}
            ></input>
            <button
                disabled={palavra.length === 0}
                onClick={tratarInput}>Chutar</button>
        </div>
    )
}

export default Chute;