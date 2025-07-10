import './Page1.scss';
import { Link } from 'react-router-dom';

export const Page1 = () => {
  return (
    <div className="page1">
        <h1>Page 1</h1>
        <div className="href">
          <Link to="/page2">
            Forward
          </Link>
      </div>
      <Link to="/" className="back-home"
              onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        На главную
      </Link>
    </div>
  );
};
