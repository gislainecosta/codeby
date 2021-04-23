import { useEffect, useState } from 'react';
import  '../styles/Home.css';
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';
import { formatPrice } from './../utils/functions';
import { useHistory } from 'react-router-dom';

export default function Home() {
    let history = useHistory();
    const [productsList, setProductsList] = useState<any>([])
    const products = useSelector((state: any) => state.products);

    useEffect(() => {
        let show;
        if (products !== undefined) {
            show = products.map((product:any) => {
                return <ProductItem
                    key={product.productId}
                    image={product.imageUrl}
                    name={product.name}
                    originalPrice={formatPrice(product.price)}
                    actualPrice={formatPrice(product.sellingPrice)}
                    id={product.productId}
                />
            })
        }

        setProductsList(show)
    }, [products])

    const goToCart = () => {
        history.push('carrinho')
    }

    return (
        <div className='home'>
            <h2>Escolha as suas Trufas</h2>
            
            <main>
                {productsList}
            </main>

            <footer>
                <button
                    onClick={goToCart}
                    className='button-cart'
                >
                    Ir para o Carinho
                    </button>
            </footer>
        </div>
    )
}