import './Process.scss';
import processImage1 from '../../assets/images/process-image-1.png';
import processImage2 from '../../assets/images/process-image-2.png';
import processImage3 from '../../assets/images/process-image-3.png';
import processImage4 from '../../assets/images/process-image-4.png';

function Process() {
    return (
        <section className="process">
            <div className="process__content">
                <div className="process__headers">
                    <h2 className="process__title">Your Title Here</h2>
                    <h3 className="process__subtitle">Your Subtitle Here</h3>
                </div>
                <div className="process__steps">
                    <div className="process__step">
                        <p className="process__text">First step text here</p>
                        <img src={processImage1} alt="Process step 1" className="process__image" />
                        <h3 className="process__step-title">Step 1 Title</h3>
                        <p className="process__step-description">Step 1 description</p>
                    </div>
                    <div className="process__step">
                        <p className="process__text">Second step text here</p>
                        <img src={processImage2} alt="Process step 2" className="process__image" />
                        <h3 className="process__step-title">Step 2 Title</h3>
                        <p className="process__step-description">Step 2 description</p>
                    </div>
                    <div className="process__step">
                        <p className="process__text">Third step text here</p>
                        <img src={processImage3} alt="Process step 3" className="process__image" />
                        <h3 className="process__step-title">Step 3 Title</h3>
                        <p className="process__step-description">Step 3 description</p>
                    </div>
                    <div className="process__step">
                        <p className="process__text">Fourth step text here</p>
                        <img src={processImage4} alt="Process step 4" className="process__image" />
                        <h3 className="process__step-title">Step 4 Title</h3>
                        <p className="process__step-description">Step 4 description</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process; 