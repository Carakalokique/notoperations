import { useState, useEffect } from "react";
import "./Reviews.scss";
import quotes from "../../assets/icons/quotes.png";
import profile from "../../assets/images/kenny.png";

function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const reviews = [
    {
      testimonial: "First testimonial text here. This is the actual review content for card 1.",
      name: "John Smith",
      title: "CEO, Company One",
      image: profile
    },
    {
      testimonial: "Second testimonial text here. This is the actual review content for card 2.",
      name: "Jane Doe",
      title: "Director, Company Two",
      image: profile
    },
    {
      testimonial: "Third testimonial text here. This is the actual review content for card 3.",
      name: "Mike Johnson",
      title: "Founder, Company Three",
      image: profile
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="reviews">
      <div className="reviews__content">
        <div className="reviews__headers">
          <h2 className="reviews__title">The Reviews</h2>
          <h3 className="reviews__subtitle">Not Convinced Yet?</h3>
        </div>
        <p className="reviews__description">
        Clients rave about how our automation boosts efficiency, speeds up onboarding, and transforms their agencies.
        </p>
        <div className="reviews__carousel">
          <div 
            className="reviews__cards" 
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="reviews__card">
                <img src={quotes} alt="" className="reviews__quotes" />
                <p className="reviews__testimonial">{review.testimonial}</p>
                <div className="reviews__profile">
                  <div className="reviews__profile-image">
                    <img src={review.image} alt={review.name} />
                  </div>
                  <div className="reviews__profile-info">
                    <h3 className="reviews__profile-name">{review.name}</h3>
                    <p className="reviews__profile-title">{review.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="reviews__dots">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`reviews__dot ${index === currentSlide ? 'reviews__dot--active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews; 