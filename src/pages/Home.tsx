import { useEffect, useState } from 'react';
import  '../styles/Home.css';
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';
import { formatPrice } from './../utils/functions';

export default function Home() {
    const [productsList, setProductsList] = useState<any>([])
    const products = useSelector((state: any) => state.products);

    useEffect(() => {
        let show = <p>Carregando Produtos</p>
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

    return (
        <div className='home'>
            <main>
                <h2>Escolha as suas Trufas</h2>
                {productsList}
            </main>

            <footer>

            </footer>
        </div>
    )
}