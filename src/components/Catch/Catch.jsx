import './Catch.scss';
import checkmark from '../../assets/icons/checkmark.png';
import catchImage from '../../assets/images/catch-image.png';
import link from '../../assets/icons/link.png';

function Catch() {
    return (
        <section className="catch">
            <div className="catch__content">
                <div className="catch__headers">
                    <h2 className="catch__title">The Catch</h2>
                    <h3 className="catch__subtitle">Ready to Transform Your Operations?</h3>
                </div>
                <p className="catch__description">
                    We're operations consultants. Instead of creating complexity, we make systems that you can actually use to help you focus on what you do best.
                </p>
                <div className="catch__points">
                    <p className="catch__point">
                        <img src={checkmark} alt="checkmark" className="catch__icon" />
                        Your operational maturity score across 6 critical areas.
                    </p>
                    <p className="catch__point">
                        <img src={checkmark} alt="checkmark" className="catch__icon" />
                        How to get out of the way so your team can do their best work.
                    </p>
                    <p className="catch__point">
                        <img src={checkmark} alt="checkmark" className="catch__icon" />
                        Specific bottlenecks holding back your growth.
                    </p>
                </div>
                <img src={catchImage} alt="Catch description" className="catch__image" />
                <div className="catch__container">
                    <a className="catch__link" href="#">Attend Workshop</a>
                    <img className="catch__link-icon" src={link} alt="Attend Workshop" />
                </div>
                <button className="catch__button">Take Assessment</button>
            </div>
        </section>
    );
}

export default Catch; 