import './Footer.scss';
import logo from '../../assets/logos/logo_o.png';
import x from '../../assets/icons/x.png';
import linkedin from '../../assets/icons/linkedin.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__line"></div>
                <img src={logo} alt="Company logo" className="footer__logo" />
                <div className="footer__socials">
                    <a href="#" className="footer__social-link">
                        <img src={x} alt="X (Twitter)" className="footer__social-icon" />
                    </a>
                    <a href="#" className="footer__social-link">
                        <img src={linkedin} alt="LinkedIn" className="footer__social-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 