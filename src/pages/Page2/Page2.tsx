import './Page2.scss';
import { Link } from 'react-router-dom';

export const Page2 = () => {
  return (
    <div className="page2">
        <h1>Page 2</h1>
        <div className="href">
          <Link to="/page3">
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
