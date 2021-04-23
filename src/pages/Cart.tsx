import { useEffect, useState } from 'react'
import '../styles/Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CartItem from '../components/CartItem';
import { formatCurrency } from '../utils/functions';

export default function Cart() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [shippngFree, setShippingFree] = useState<boolean>(false);
    const cartItems = useSelector((state: any) => state.cart);
    const total = useSelector((state: any) => state.totalCart);

    useEffect(() => {
        total >= 10 ? setShippingFree(true) : setShippingFree(false)
    }, [total])

    const checkout = () => {
        dispatch({ type: 'CLEAR_CART', payload: '' });
        history.push('finalizar-compra')
    }

    return (
        <div className='cart'>
            <h2>Meu Carrinho</h2>

            <main>
                <section>
                    {
                        cartItems === undefined ?
                            <p>Carrinho Vazio</p> :
                            cartItems.map((product: any) => {
                                return <CartItem
                                    key={product.id}
                                    image={product.image}
                                    name={product.name}
                                    originalPrice={product.originalPrice}
                                    actualPrice={product.actualPrice}
                                    id={product.id}
                                />
                            })
                    }
                </section>
                <section className='totalPrice'>
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                    {
                        shippngFree &&
                        <p>Parabéns, sua compra tem frete grátis!</p>
                    }
                </section>
            </main>

            <footer>
                <button
                    onClick={checkout}
                    className='button-checkout'
                >
                    Finalizar Compra
                    </button>
            </footer>
        </div>
    )
}