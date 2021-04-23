import { useEffect, useState } from 'react'
import '../styles/Cart.css';
import { useSelector } from 'react-redux';

import CartItem from '../components/CartItem';

export default function Cart() {
    const [totalPrice, setTotalPrice] = useState<string>('35,00');
    const [shippngFree, setShippingFree] = useState<boolean>(false);
    const cartItems = useSelector((state: any) => state.cart);

    useEffect(() => {
        const total = Number(totalPrice.replace(',', '.'))
        total >= 10 ? setShippingFree(true) : setShippingFree(false)
    }, [totalPrice])

    console.log(cartItems)

    const mostra = () => {
        console.log('CHAMOU BOTÃO', cartItems)
    }

    return (
        <div className='cart'>
            <header className='header'>
                <h2>Meu Carrinho</h2>
            </header>

            <main>
                <section className='cartItems'>
                    {
                        cartItems === undefined ?
                            <p>Carrinho Vazio</p> :
                            cartItems.map((product:any) => {
                                return <CartItem
                                    key={product.id}
                                    image={product.photo}
                                    name={product.name}
                                    originalPrice={product.originalPrice}
                                    actualPrice={product.actualPrice}
                                    id={product.id}
                                    amount={product.amount}
                                />
                            })
                    }
                </section>
                <section className='totalPrice'>
                    <span>Total</span>
                    <span>R$ {totalPrice}</span>

                    <button onClick={mostra}>Carrinho</button>
                    {
                        shippngFree &&
                        <p>Parabéns, sua compra tem frete grátis!</p>
                    }
                </section>
            </main>

            <footer>
                <button className='buttonBuy'>Finalizar Compra</button>
            </footer>
        </div>
    )
}