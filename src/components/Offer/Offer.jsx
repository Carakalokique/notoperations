import './Offer.scss';
import checkmark from '../../assets/icons/checkmark.png';
import offerImage from '../../assets/images/offer-image.png';

function Offer() {
    return (
        <section className="offer">
            <div className="offer__content">
                <div className="offer__headers">
                    <h2 className="offer__title">The Offer</h2>
                    <h3 className="offer__subtitle">What You'll Discover in 3 Minutes</h3>
                </div>
                <div className="offer__points">
                    <p className="offer__point">
                        <img src={checkmark} alt="checkmark" className="offer__icon" />
                        Your operational maturity score across 6 critical areas.
                    </p>
                    <p className="offer__point">
                        <img src={checkmark} alt="checkmark" className="offer__icon" />
                        How to get out of the way so your team can do their best work.
                    </p>
                    <p className="offer__point">
                        <img src={checkmark} alt="checkmark" className="offer__icon" />
                        Specific bottlenecks holding back your growth.
                    </p>
                    <p className="offer__point">
                        <img src={checkmark} alt="checkmark" className="offer__icon" />
                        Specific bottlenecks holding back your growth.
                    </p>
                </div>
            </div>
            <img src={offerImage} alt="Offer description" className="offer__image" />
        </section>
    );
}

export default Offer;
