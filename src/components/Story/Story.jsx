import './Story.scss';
import kenny from '../../assets/images/kenny.png';

function Story() {
    return (
        <section className="story">
            <div className="story__content">
                <div className="story__headers">
                    <h2 className="story__title">The Story</h2>
                    <h3 className="story__subtitle">How it All Started</h3>
                </div>
                <p className="story__intro">
                    I'm Kenny, founder of Not Operations.
                </p>
                <img src={kenny} alt="Kenny, founder of Not Operations" className="story__image" />
                <div className="story__paragraphs">
                    <p className="story__paragraph">
                        We're operations consultants. Instead of creating complexity, we make systems that you can actually use to help you focus on what you do best.
                    </p>
                    <p className="story__paragraph">
                        We've worked with over 60+ businesses, including 6 to 7-figure contracts and a dozen premium B2B service providers.
                    </p>
                    <p className="story__paragraph">
                        We're partnering with select premium service providers. Let us help you build strong foundations, unify tools, and add smart automations to make business fun.
                    </p>
                    <p className="story__paragraph">
                        Our ultimate game is to build an ecosystem where businesses can have fun growing their companies, where operations fade into the background and owners can stay in flow doing what they love.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Story; 