import '../styles/Header.css'
import { useHistory } from 'react-router-dom';
import Logo from '../images/logo-horizontal.png';
import IconCart from '../images/cart.png';

const Header = () => {
    let history = useHistory()

    const goToPage = (page: string) => {
        history.push(`${page}`)
    }

    return (
        <div className='header'>
            <img
                src={Logo}
                alt='Logo Codeby'
                onClick={() => goToPage('')}
            />
            <img
                src={IconCart}
                alt='Logo Carrinho'
                onClick={() => goToPage('carrinho')}
            />
        </div>
    )
}

export default Header