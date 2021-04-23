import '../styles/Product.css';
import { useDispatch } from 'react-redux';
import { formatCurrency } from '../utils/functions';
import AddCart from '../images/add-cart.png'

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
            originalPrice: props.originalPrice,
            actualPrice: props.actualPrice,
            id: props.id,
            amount: 1
        }

        dispatch({ type: 'ADD_CART', payload });
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

            <img src={AddCart} onClick={addCart} alt='Aadicionar ao CArrinho' />
        </div>
    )
}