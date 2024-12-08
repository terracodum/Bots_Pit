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
                    <li>Малышев Семён</li>
                    <li>Макеев Всеволод</li>
                    <li>Квинт Александр</li>
                    <li>Харлов Никита</li>
                </ul>
            </div> 
            <div className='footer__btn'>
                <Download/>
            </div>
        </div>       
    )
}

export default Footer;