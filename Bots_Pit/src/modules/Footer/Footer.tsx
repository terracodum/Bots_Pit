import './Footer.css';
import Logo from '../Logo/Logo.tsx';
import Download from '../Download/Download';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__logo">
                <Logo/>
            </div>
            <div className='sostav'>
                <h3 className='footer__list'>Состав Команды:</h3>
                <ul>
                    <li className='list__elem'>Дудиков Дмитрий</li>
                    <li className='list__elem'>Малышев Семён</li>
                    <li className='list__elem'>Макеев Всеволод</li>
                    <li className='list__elem'>Квинт Александр</li>
                    <li className='list__elem'>Харлов Никита</li>
                </ul>
            </div> 
            <div className='footer__btn'>
                <Download/>
            </div>
        </div>       
    )
}

export default Footer;