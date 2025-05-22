import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Are You in the Way or Helping Your Team?</h1>
        <p className="hero__text">Take our 3-minute <span className="hero__text--emphasis">Operations Maturity Assessment</span> to know where you and your business stands.</p>
        <a href="https://why.notoperations.com/quiz/questions" target="_blank" rel="noopener noreferrer" className="hero__button">Take Assessment</a>
      </div>
    </section>
  );
}

export default Hero;
