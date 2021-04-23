import { useDispatch } from 'react-redux';

interface ProductDetail {
    image: string,
    name: string,
    originalPrice: string,
    actualPrice: string,
    id: string
}

export default function ProductItem(props: ProductDetail) {
    const dispatch = useDispatch();

    const addCart = () => {
        dispatch({ type: 'ADD_CART', payload: props.id });
    }

    return (
        <div className='cartItem'>
            <div className='productImage'>
                <img src={props.image} alt='Imagem do Produto' />
            </div>

            <div>
                <div className='productDetail'>
                    <p>{props.name}</p>
                    <p>R$ {props.originalPrice}</p>
                    <p>R$ {props.actualPrice}</p>
                </div>
                <button onClick={addCart}>Add CArt</button>
            </div>
        </div>
    )
}