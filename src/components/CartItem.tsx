import '../styles/CartItem.css'

interface ProductDetail {
    image: string,
    name: string,
    originalPrice: string,
    actualPrice: string,
    id: string,
    amount: number
}

export default function CartItem(props: ProductDetail) {
    return (
        <div className='cartItem'>
            <div className='productImage'>
                <img src={props.image} alt='Imagem do Produto' />
            </div>

            <div className='productDetail'>
                <p>{props.name}</p>
                <p>R$ {props.originalPrice}</p>
                <p>R$ {props.actualPrice}</p>
            </div>
        </div>
    )
}