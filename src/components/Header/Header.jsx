import './Header.scss';
import logo from '../../assets/logos/logo_black.png';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Not Operations" className="header__logo" />
            <button className="header__button">Take Assessment</button>
        </header>
    );
}

export default Header;