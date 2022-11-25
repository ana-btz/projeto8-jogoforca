function Letras({palavra}) {
    const alfabeto =
        ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <div className="letras">
            {/* <div className="desabilitado"></div> */}
            {alfabeto.map((letra) =>
                <button
                    disabled={palavra.length === 0}
                    onClick={() => alert("clicou!")}
                >
                    {letra.toUpperCase()}
                </button>)}
        </div>
    )
}

export default Letras;