import './Story.scss';
import kenny from '../../assets/images/kenny.png';

function Story() {
    return (
        <section className="story">
            <div className="story__container">
                <div className="story__text-content">
                    <div className="story__headers">
                        <h2 className="story__title">The Story</h2>
                        <h3 className="story__subtitle">How it All Started</h3>
                    </div>
                    <p className="story__intro">
                    I'm Kenny, founder of Not Operations. We are operations and automation consultants.
                    </p>
                    <div className="story__image-container-mobile">
                        <img src={kenny} alt="Kenny, founder of Not Operations" className="story__image" />
                    </div>
                    <div className="story__paragraphs">
                        <p className="story__paragraph">
                        We've transformed operations for 60+ businesses, cutting admin time by 50%, eliminating dozens of spreadsheets, and reducing software costs by up to 90%.
                        </p>
                        <p className="story__paragraph">
                            <span className="story__paragraph--emphasis">Our experience spans from boutique agencies to Fortune 500 companies like Yahoo Finance and Binance, from 5 to 7 figure projects.</span>
                        </p>
                        <p className="story__paragraph">
                        We're partnering with select premium service providers who want to push their operations to the next level but don't have the bandwidth or technical expertise to do it in house.
                        </p>
                        <p className="story__paragraph">
                        Our ultimate vision is to create an ecosystem for business owners to help them build businesses that feel like a game to play.
                        </p>
                    </div>
                </div>
                <div className="story__image-container-desktop">
                    <img src={kenny} alt="Kenny, founder of Not Operations" className="story__image" />
                </div>
            </div>
        </section>
    );
}

export default Story; 