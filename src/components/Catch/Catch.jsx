import './Catch.scss';
import checkmark from '../../assets/icons/checkmark.svg';
import catchImage from '../../assets/images/catch-image.jpg';

function Catch() {
    return (
        <section className="catch">
            <div className="catch__content">
                <div className="catch__headers">
                    <h2 className="catch__title">Your Title Here</h2>
                    <h3 className="catch__subtitle">Your Subtitle Here</h3>
                </div>
                <div className="catch__points">
                    <p className="catch__point">
                        <img src={checkmark} alt="" className="catch__icon" />
                        First point about the catch
                    </p>
                    <p className="catch__point">
                        <img src={checkmark} alt="" className="catch__icon" />
                        Second point about the catch
                    </p>
                    <p className="catch__point">
                        <img src={checkmark} alt="" className="catch__icon" />
                        Third point about the catch
                    </p>
                    <p className="catch__point">
                        <img src={checkmark} alt="" className="catch__icon" />
                        Fourth point about the catch
                    </p>
                </div>
            </div>
            <img src={catchImage} alt="Catch description" className="catch__image" />
        </section>
    );
}

export default Catch; 