import { useState, useEffect, useRef } from "react";
import "./Reviews.scss";
import quotes from "../../assets/icons/quotes.png";
import profile from "../../assets/images/kenny.png";

function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  
  const reviews = [
    {
      testimonial: "The automation transformed our onboarding process. What used to take days now takes hours.",
      name: "John Smith",
      title: "CEO, Tech Innovations",
      image: profile
    },
    {
      testimonial: "Our team productivity increased by 40% after implementing their operational systems.",
      name: "Jane Doe",
      title: "Director, Growth Agency",
      image: profile
    },
    {
      testimonial: "Finally, operations that work seamlessly in the background. Game-changing for our business.",
      name: "Mike Johnson",
      title: "Founder, Scale Solutions",
      image: profile
    },
    {
      testimonial: "The assessment revealed gaps we didn't know existed. The roadmap to fix them was invaluable.",
      name: "Sarah Williams",
      title: "COO, Digital Ventures",
      image: profile
    },
    {
      testimonial: "From chaos to clarity in just weeks. Their process-driven approach is exactly what we needed.",
      name: "David Chen",
      title: "Managing Partner, Consulting Pro",
      image: profile
    },
    {
      testimonial: "We've saved 20+ hours per week on repetitive tasks. The ROI was immediate and substantial.",
      name: "Emily Davis",
      title: "VP Operations, Service Plus",
      image: profile
    }
  ];

  // Calculate card width on mount and resize
  useEffect(() => {
    const calculateCardWidth = () => {
      if (carouselRef.current) {
        const firstCard = carouselRef.current.querySelector('.reviews__card');
        if (firstCard) {
          const width = firstCard.offsetWidth;
          const gap = isDesktop ? 16 : 0; // 1rem = 16px gap on desktop, 0 on mobile
          setCardWidth(width + gap);
        }
      }
    };

    calculateCardWidth();
    window.addEventListener('resize', calculateCardWidth);
    return () => window.removeEventListener('resize', calculateCardWidth);
  }, [isDesktop]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate the maximum slide index based on viewport
  const getMaxSlideIndex = () => {
    if (isDesktop) {
      return Math.max(0, reviews.length - 3); // Show 3 cards at a time on desktop
    }
    return reviews.length - 1; // Show 1 card at a time on mobile/tablet
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxIndex = getMaxSlideIndex();
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [isDesktop]);

  const handleDotClick = (index) => {
    const maxIndex = getMaxSlideIndex();
    setCurrentSlide(Math.min(index, maxIndex));
  };

  // Calculate transform value using pixels
  const getTransformValue = () => {
    return currentSlide * cardWidth;
  };

  // Calculate number of dots to show
  const getDotsCount = () => {
    if (isDesktop) {
      return Math.max(1, reviews.length - 2); // Desktop: dots for sliding groups of 3
    }
    return reviews.length; // Mobile/tablet: one dot per review
  };

  return (
    <section className="reviews">
      <div className="reviews__container">
        <div className="reviews__content">
          <div className="reviews__headers">
            <h2 className="reviews__title">The Reviews</h2>
            <h3 className="reviews__subtitle">Not Convinced Yet?</h3>
          </div>
          <p className="reviews__description">
            Clients rave about how our automation boosts efficiency, speeds up onboarding, and transforms their agencies.
          </p>
          <div className="reviews__carousel" ref={carouselRef}>
            <div 
              className="reviews__cards" 
              style={{ 
                transform: `translateX(-${getTransformValue()}px)`,
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
              {Array.from({ length: getDotsCount() }).map((_, index) => (
                <button
                  key={index}
                  className={`reviews__dot ${index === currentSlide ? 'reviews__dot--active' : ''}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews; 