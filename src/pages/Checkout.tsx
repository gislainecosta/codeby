import '../styles/Checkout.css';
import Logo from '../images/logo.png';
import { useHistory } from 'react-router-dom';

export default function Checkout() {
    let history = useHistory();

    return(
        <div className='checkout'>
            <h1>A Codeby agradece a preferência</h1>
            <div>
                <img 
                    src={Logo} 
                    alt='Logo'
                    onClick={() => history.push('')}
                />
            </div>
        </div>
    )
}