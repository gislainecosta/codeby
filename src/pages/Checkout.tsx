import '../styles/Checkout.css'
import Logo from '../images/logo.png'

export default function Checkout() {
    return(
        <div className='checkout'>
            <h1>A Codeby agradece a preferência</h1>
            <div>
                <img src={Logo} alt='Logo'/>
            </div>
        </div>
    )
}