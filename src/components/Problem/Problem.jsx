function Problem() {
    return (
        <section className="problem">
            <div className="problem__content">
                <div className="problem__headers">
                    <h2 className="problem__title">Your Title Here</h2>
                    <h3 className="problem__subtitle">Your Subtitle Here</h3>
                </div>
                <div className="problem__cards">
                    <div className="problem__card">
                        <p className="problem__card-text">First text here</p>
                        <h4 className="problem__card-title">Card Title 1</h4>
                        <p className="problem__card-description">Card description 1</p>
                    </div>
                    <div className="problem__card">
                        <p className="problem__card-text">Second text here</p>
                        <h4 className="problem__card-title">Card Title 2</h4>
                        <p className="problem__card-description">Card description 2</p>
                    </div>
                    <div className="problem__card">
                        <p className="problem__card-text">Third text here</p>
                        <h4 className="problem__card-title">Card Title 3</h4>
                        <p className="problem__card-description">Card description 3</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Problem; 