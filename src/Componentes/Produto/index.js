const Produto = ({valor}) => {
    return (
        <div>
            <h3> {valor.nome} </h3>
            <p> Preco: {valor.preco} </p>
        </div>
    )
};

export default Produto;