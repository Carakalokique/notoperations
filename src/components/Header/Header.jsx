import './Header.scss';
import logo from '../../assets/logos/logo_black.png';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} alt="Not Operations" className="header__logo" />
                <a href="https://why.notoperations.com/quiz/questions" target="_blank" rel="noopener noreferrer" className="header__button">Take Assessment</a>
            </div>
        </header>
    );
}

export default Header;