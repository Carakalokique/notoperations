import './landingPage.scss'
import Button from "../../components/Button/Button";

const LandingPage = () => {
  return (
    <main className="hero">
      <section className="hero__content">
      <p className="hero__tagline">Automate Your Success, One Workflow at a Time.</p>
      <h1 className="hero__title">Streamline Your Digital Agency with Expert Automation.</h1>
      <a 
        href="https://do.notoperations.com/quiz/questions" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Button className="hero__button">
          Take Assessment
        </Button>
      </a>
      </section>
    </main>
  );
};

export default LandingPage;