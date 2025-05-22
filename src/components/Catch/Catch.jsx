import './Catch.scss';
import checkmark from '../../assets/icons/checkmark.png';
import catchImage from '../../assets/images/catch-image.png';

function Catch() {
    return (
        <section className="catch">
            <div className="catch__container">
                <div className="catch__text-content">
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
                    <div className="catch__image-container-mobile">
                        <img src={catchImage} alt="Catch description" className="catch__image" />
                    </div>
                    <div className="catch__buttons">
                        <a href="https://why.notoperations.com/quiz/questions" target="_blank" rel="noopener noreferrer" className="catch__button">Take Assessment</a>
                    </div>
                </div>
                <div className="catch__image-container-desktop">
                    <img src={catchImage} alt="Catch description" className="catch__image" />
                </div>
            </div>
        </section>
    );
}

export default Catch; 