import './Process.scss';
import processImage1 from '../../assets/images/process-image-1.png';
import processImage2 from '../../assets/images/process-image-2.png';
import processImage3 from '../../assets/images/process-image-3.png';
import processImage4 from '../../assets/images/process-image-4.png';

function Process() {
    return (
        <section className="process">
            <div className="process__container">
                <div className="process__content">
                    <div className="process__headers">
                        <h2 className="process__title">The Process</h2>
                        <h3 className="process__subtitle">Our Roadmap, Simplified.</h3>
                    </div>
                    <div className="process__steps">
                        <div className="process__step">
                            <p className="process__text">01</p>
                            <img src={processImage1} alt="Process step 1" className="process__image" />
                            <h3 className="process__step-title">Assessment</h3>
                            <p className="process__step-description">Complete for a personalized analysis.</p>
                        </div>
                        <div className="process__step">
                            <p className="process__text">02</p>
                            <img src={processImage2} alt="Process step 2" className="process__image" />
                            <h3 className="process__step-title">Report</h3>
                            <p className="process__step-description">Get an instant, detailed report tailored to you.</p>
                        </div>
                        <div className="process__step">
                            <p className="process__text">03</p>
                            <img src={processImage3} alt="Process step 3" className="process__image" />
                            <h3 className="process__step-title">Insights</h3>
                            <p className="process__step-description">Gain actionable insights to drive improvement.</p>
                        </div>
                        <div className="process__step">
                            <p className="process__text">04</p>
                            <img src={processImage4} alt="Process step 4" className="process__image" />
                            <h3 className="process__step-title">Consultation</h3>
                            <p className="process__step-description">Book a strategy call to
                            plan your next steps.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process; 