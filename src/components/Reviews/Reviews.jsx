import "./Reviews.scss";
import quotes from "../../assets/icons/quotes.png";
import profile from "../../assets/images/kenny.png";

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
            <img src={quotes} alt="" className="reviews__quotes" />
            <p className="reviews__testimonial">Your testimonial text here</p>
            <div className="reviews__profile">
              <div className="reviews__profile-image">
                <img src={profile} alt="Reviewer name" />
              </div>
              <div className="reviews__profile-info">
                <h3 className="reviews__profile-name">Reviewer Name</h3>
                <p className="reviews__profile-title">Position Title</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews; 