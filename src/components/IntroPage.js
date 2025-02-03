import { useEffect } from "react";
import "./IntroPage.css";

function IntroPage({ getStartedFn }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="wrapper">
      <div className="intro-container">
        <h1 className="intro-head">
          <span className="head-text">
            <span>Supercharge your career and save time with our resume builder</span>
          </span>
        </h1>
        <p className="intro-desc">A free resume builder for developers & software engineers.</p>
        <div className="start-btn-container">
          <button type="button" onClick={getStartedFn} className="get-started-btn">
            CREATE RESUME
          </button>
        </div>
      </div>

      {/* Elfsight Widget */}
      <div className="elfsight-widget-container">
        <div className="elfsight-app-0d381ebb-7870-47a1-83eb-028132dd944e" data-elfsight-app-lazy></div>
      </div>
    </div>
  );
}

export default IntroPage;
