import {} from '../../index.css';

const Produto = ({valor}) => {
    return (
        <div className='card'>
            <h3 className='titulo'> {valor.nome} </h3>
            <p> Preco: {valor.preco} </p>
            <img src={valor.foto} alt='Imagem do Produto' className='imagem'></img>
        </div>
    )
};

export default Produto;