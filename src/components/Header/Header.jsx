import './Header.scss';
import logo from '../../assets/logos/company-logo.svg';
import menuIcon from '../../assets/icons/menu.svg';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Company Logo" className="header__logo" />
            <img src={menuIcon} alt="Menu" className="header__menu-icon" />
        </header>
    );
}

export default Header;