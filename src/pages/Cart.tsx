import { useEffect, useState } from 'react'
import '../styles/Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { formatCurrency } from '../utils/functions';
import Back from '../images/back.png'

export default function Cart() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [shippngFree, setShippingFree] = useState<boolean>(false);
    const [cartList, setCartList] = useState<any>([])
    const cartItems = useSelector((state: any) => state.cart);
    const total = useSelector((state: any) => state.totalCart);

    useEffect(() => {
        total >= 10 ? setShippingFree(true) : setShippingFree(false)
    }, [total])

    useEffect(() => {
        let show;
        if (cartItems !== undefined) {
            show = cartItems.map((product: any) => {
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
        setCartList(show)
    }, [cartItems])

    const checkout = () => {
        dispatch({ type: 'CLEAR_CART', payload: '' });
        goToPage('finalizar-compra')
    }

    const goToPage = (page: string) => {
        history.push(`${page}`)
    }

    return (
        <div className='cart'>
            <header>
                <img
                    src={Back}
                    alt='Voltar à Home'
                    onClick={() => goToPage('')}
                />
                <h2>Meu Carrinho</h2>
            </header>

            <main>
                {cartList}
                <section className='totalPrice'>
                    <div>
                        <p>Total</p>
                        <p>{formatCurrency(total)}</p>
                    </div>
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