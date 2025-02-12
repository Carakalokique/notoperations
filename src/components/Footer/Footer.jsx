import './Footer.scss'
import logoWhite from '../../assets/logos/logo_white.png';
import linkedin from '../../assets/icons/linkedin.png';
import x from '../../assets/icons/x.png';

const Footer = () => {

  return (
    <footer>
        <section className="footer__container footer__container--left">
        <img src={logoWhite} alt="Not Operations" className="logo" />
        <p className='footer__name'>Not Operations</p>
        </section>
      <section className="footer__container footer__container--right">
        <div className="footer__socials">
            <a 
              href="https://www.linkedin.com/in/kennyalami/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                className="footer__icons" 
                src={linkedin} 
                alt="Visit Not Operations on LinkedIn" 
              />
            </a>
            <a 
              href="https://x.com/KennyAlami/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                className="footer__icons" 
                src={x} 
                alt="Visit Not Operations on X" 
              />
            </a>
        </div>
        <p className="footer__copyright">
            &copy; 2025 Not Operations. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;

