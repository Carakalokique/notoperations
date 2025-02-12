import './Header.scss';
import Button from "../Button/Button";
import logoBlack from '../../assets/logos/logo_black.png';

const Header = () => {

  const handleClick = () => {
    window.location.href = 'https://scorecard.k2a2.co/businesslikegame/questions';
  };

  return (
    <header>
      <img src={logoBlack} alt="Not Operations" className="logo" />
      <Button 
        className="header__button"
        onClick={handleClick}
      >
        Take Assessment
      </Button>
    </header>
  );
};

export default Header;
