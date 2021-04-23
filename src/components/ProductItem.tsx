import { useDispatch } from 'react-redux';
import { formatCurrency } from '../utils/functions';

interface ProductDetail {
    image: string,
    name: string,
    originalPrice: number,
    actualPrice: number,
    id: string
}

export default function ProductItem(props: ProductDetail) {
    const dispatch = useDispatch();

    const addCart = () => {
        const payload = {
            image: props.image,
            name: props.name,
            originalPrice:props.originalPrice,
            actualPrice: props.actualPrice,
            id: props.id,
            amount: 1
        }
        
        dispatch({ type: 'ADD_CART', payload });
    }

    return (
        <div className='cartItem'>
            <div className='productImage'>
                <img src={props.image} alt='Imagem do Produto' />
            </div>

            <div>
                <div className='productDetail'>
                    <p>{props.name}</p>
                    <p>{formatCurrency(props.originalPrice)}</p>
                    <p>{formatCurrency(props.actualPrice)}</p>
                </div>
                <button onClick={addCart}>Add CArt</button>
            </div>
        </div>
    )
}