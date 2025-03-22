import "./Hero.scss";
import link from "../../assets/icons/link.png";

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">Are You in the Way or Helping Your Team?</h1>
      <p className="hero__text">Take our 3-minute <span className="hero__text--emphasis">Operations Maturity Assessment</span> to know where you and your business stands.</p>
      <div className="hero__container">
        <a className="hero__link" href="#">Attend Workshop</a>
        <img className="hero__link-icon" src={link} alt="Attend Workshop" />
      </div>
      <button className="hero__button">Take Assessment</button>
    </section>
  );
}

export default Hero;
