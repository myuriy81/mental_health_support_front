import './Page1.scss';
import { Link } from 'react-router-dom';

export const Page1 = () => {
  return (
    <div className="page1">
      <h1>Page 1</h1>
      <div className="href">
        <Link to="/page2">Forward</Link>
      </div>
      {/* <Link
        to="/"
        className="footer__submit-button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="custom-button">
          <svg viewBox="0 0 300 70" className="button-frame" preserveAspectRatio="none">
            <path d="M15 0 H300 V46 L284 70 H0 V23 Z" fill="none" stroke="white" strokeWidth="2" />
          </svg>
          <span className="button-text">на головну</span>
        </div>
      </Link> */}
    </div>
  );
};
