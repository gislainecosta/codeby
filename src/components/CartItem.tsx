import '../styles/CartItem.css';
import { formatCurrency } from '../utils/functions';

interface ProductDetail {
    image: string,
    name: string,
    originalPrice: number,
    actualPrice: number,
    id: string
}

export default function CartItem(props: ProductDetail) {
    console.log(props.originalPrice)
    return (
        <div className='cartItem'>
            <div className='productImage'>
                <img src={props.image} alt='Imagem do Produto' />
            </div>

            <div className='productDetail'>
                <p>{props.name}</p>
                <p>{formatCurrency(props.originalPrice)}</p>
                <p>{formatCurrency(props.actualPrice)}</p>
            </div>
        </div>
    )
}