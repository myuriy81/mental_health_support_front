import './Page2.scss';
import { Link } from 'react-router-dom';

export const Page2 = () => {
  return (
    <div className="page2">
      <h1>Page 2</h1>

      <div className="custom-button">
        <svg
          viewBox="0 0 300 70"
          xmlns="http://www.w3.org/2000/svg"
          className="button-frame"
          preserveAspectRatio="none"
        >
          <path d="M20 0 H300 V50 L280 70 H0 V20 Z" fill="none" stroke="white" strokeWidth="2" />
        </svg>
        <span className="button-text">ПОДАТИ ЗАЯВКУ</span>
      </div>

      <div className="href">
        <Link to="/page3">Forward</Link>
      </div>
      <Link
        to="/"
        className="back-home"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        На головну
      </Link>
    </div>
  );
};
