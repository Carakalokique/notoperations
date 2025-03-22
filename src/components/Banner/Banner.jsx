import './Banner.scss';
import yahooFinance from '../../assets/logos/yahoo-finance.png';
import goodNeighbour from '../../assets/logos/good-neighbour.png';
import binance from '../../assets/logos/binance.png';

function Banner() {
    return (
        <section className="banner">
            <p className="banner__text">
                Trusted by <span className="banner__text--emphasis">60+ business providers</span> including dozens of premium service providers:
            </p>
            <div className="banner__logos">
                <img src={binance} alt="Binance" className="banner__logo" />
                <img src={yahooFinance} alt="Yahoo Finance" className="banner__logo" />
                <img src={goodNeighbour} alt="Good Neighbour Festivals" className="banner__logo" />
            </div>
        </section>
    );
}

export default Banner;
