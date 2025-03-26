import "./Problem.scss";

function Problem() {
  return (
    <section className="problem">
      <div className="problem__content">
        <div className="problem__headers">
          <h2 className="problem__title">The Problem</h2>
          <h3 className="problem__subtitle">
            A Business Shouldn't Feel Like This.
          </h3>
        </div>
        <div className="problem__cards">
          <div className="problem__card">
            <p className="problem__card-text">01</p>
            <div className="problem__card-content">
              <h4 className="problem__card-title">Stagnated</h4>
              <p className="problem__card-description">Constantly being the bottleneck in every client project, slowing down progress and causing delays.</p>
            </div>
          </div>
          <div className="problem__card">
            <p className="problem__card-text">02</p>
            <div className="problem__card-content">
              <h4 className="problem__card-title">Overworked</h4>
              <p className="problem__card-description">Constantly being the bottleneck in every client project, slowing down progress and causing delays.</p>
            </div>
          </div>
          <div className="problem__card">
            <p className="problem__card-text">03</p>
            <div className="problem__card-content">
              <h4 className="problem__card-title">Inefficient</h4>
              <p className="problem__card-description">Constantly being the bottleneck in every client project, slowing down progress and causing delays.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;
