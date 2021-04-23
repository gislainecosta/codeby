import '../styles/Product.css'; 
import { useDispatch } from 'react-redux';
import { formatCurrency } from '../utils/functions';

interface ProductDetail {
    image: string,
    name: string,
    originalPrice: number,
    actualPrice: number,
    id: string
}

export default function CartItem(props: ProductDetail) {
    const dispatch = useDispatch();

    const removeCart = () => {
        const payload = {
            id: props.id,
            price: props.actualPrice,
        }

        dispatch({ type: 'REMOVE_CART', payload });
    }
    
    return (
        <div className='productItem'>
            <div className='productImage'>
                <img src={props.image} alt='Imagem do Produto' />
            </div>

            <div className='productDetail'>
                <p>{props.name}</p>
                <p>{formatCurrency(props.originalPrice)}</p>
                <p>{formatCurrency(props.actualPrice)}</p>
            </div>

            <button onClick={removeCart}>Excluir</button>
        </div>
    )
}