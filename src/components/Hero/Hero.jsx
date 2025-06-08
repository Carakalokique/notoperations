import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Ready to Let Go of Your Operations?</h1>
        <p className="hero__text">Take our 3-minute <span className="hero__text--emphasis">Operations Maturity Scorecard</span> to know if your team is ready to take over.</p>
        <a href="https://why.notoperations.com/quiz/questions" target="_blank" rel="noopener noreferrer" className="hero__button">Take Assessment</a>
      </div>
    </section>
  );
}

export default Hero;
