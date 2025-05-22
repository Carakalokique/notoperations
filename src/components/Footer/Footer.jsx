import './Footer.scss';
import logo from '../../assets/logos/logo_black.png';
import x from '../../assets/icons/x-black.png';
import linkedin from '../../assets/icons/linkedin-black.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__line"></div>
                <div className="footer__bottom">
                    <img src={logo} alt="Company logo" className="footer__logo" />
                    <div className="footer__socials">
                        <a href="https://www.linkedin.com/in/kennyalami/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=ca" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            <img src={x} alt="X (Twitter)" className="footer__social-icon" />
                        </a>
                        <a href="https://x.com/kennyalami?lang=en" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            <img src={linkedin} alt="LinkedIn" className="footer__social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 