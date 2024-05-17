import './IntroPage.css';
import './Counter.css';
import Counter from './Counter';

function IntroPage({ isFirstVisit, getStartedFn }) {
  return (
  <>
  <Counter />
    <div className="intro-container">
      <h1 className="intro-head">
        <span className="head-text">
        <span>Supercharge your career and save time with our resume builder </span>
       
      </span>
      </h1>
      <p className="intro-desc">A free resume builder for developers & software engineers.</p>
      <div className="start-btn-container">
        <button type="button" onClick={getStartedFn} className="get-started-btn">CREATE RESUME</button>
      </div>
    </div>
    </>
  );
}

export default IntroPage;
