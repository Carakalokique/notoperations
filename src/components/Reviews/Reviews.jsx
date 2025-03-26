import "./Reviews.scss";

function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews__content">
        <div className="reviews__headers">
          <h2 className="reviews__title">Your Title Here</h2>
          <h3 className="reviews__subtitle">Your Subtitle Here</h3>
        </div>
        <p className="reviews__description">
          Your description paragraph goes here. This sits between the subtitle and the card.
        </p>
        <div className="reviews__cards">
          <div className="reviews__card">
            <p className="reviews__card-text">01</p>
            <div className="reviews__card-content">
              <h4 className="reviews__card-title">Card Title</h4>
              <p className="reviews__card-description">Card description goes here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews; 