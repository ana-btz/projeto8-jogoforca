function Chute({ palavra }) {
    return (
        <div className="chute">
            {/* <div className="desabilitado"></div> */}
            <h1>Já sei a palavra!</h1>
            <input disabled={palavra.length === 0}></input>
            <button>Chutar</button>
        </div>
    )
}

export default Chute;