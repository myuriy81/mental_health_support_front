import './Page3.scss';
import { Link } from 'react-router-dom';

export const Page3 = () => {
  return (
    <div className="page3">
      <h1>Page 3</h1>
      <div className="href">
        <Link to="/page4">Forward</Link>
      </div>
    </div>
  );
};
