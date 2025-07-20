// Page1.tsx
import './Page2.scss';
import { Link } from 'react-router-dom';

export const Page2 = () => {
  return (
    <div className="page2">
      <div className="page1-content">
        <div className="content-box1">
          <div className="custom-buttonQuestion">
            <svg viewBox="0 0 300 70" className="button-frame" preserveAspectRatio="none">
              <path
                d="M15 0 H300 V46 L284 70 H0 V23 Z"
                fill="none"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
            <span className="button-text">обери своє</span>
          </div>
          <div className="title-textQuestion">
            <Link to="/page21">
              1. Чи є у Вас проблеми зі сном, апетитом, швидкою втомлюваністю, зміною настрою та
              активності протягом дня?
            </Link>
            <Link to="/page22">
              2. Чи уникаєте Ви спогадів, думок, подій або ситуацій, що нагадують про стресову
              подію?
            </Link>
            <Link to="/page3">3. Чи думали Ви (будували плани) про те, щоб вбити себе?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
