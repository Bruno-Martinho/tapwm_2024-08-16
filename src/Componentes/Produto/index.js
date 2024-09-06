import {} from '../../index.css';
import {MdDelete} from 'react-icons/md';
import axios from 'axios';

const Produto = ({valor, carregaProdutos}) => {
    return (
        <div className='card'>
            <h3 className='titulo'> {valor.nome} </h3>
            <p> Preco: {valor.preco} </p>
            <p> Descrição: {valor.descricao} </p>
            <img src={valor.foto} alt='Imagem do Produto' className='imagem'></img>
            <MdDelete className='icone' onClick={()=>remover(valor.id)}></MdDelete>
        </div>
    );

    function remover(id){
        let api = "https://app-api-tapwm.onrender.com/api/produtos";
        axios.delete(`${api}/${id}`)
            .then(()=>{
                carregaProdutos();
            });
    }
}

export default Produto;