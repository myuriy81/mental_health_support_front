// Page1.tsx
import './Page1.scss';
import { Link } from 'react-router-dom';

export const Page1 = () => {
  return (
    <div className="page1">
      <div className="page1-content">
        <div className="content-box1">
          <h1 className="title-text1">
            Привіт. Якщо ти читаєш це — значить, ти вже пройшов більше, ніж більшість здатна уявити.
            І цього вже достатньо, щоб не доводити нічого нікому. Це місце створене, щоб трохи
            розвантажити голову, коли вона перевантажена. Тут не питають зайвого і не навʼязуються.
            Просто є поруч — коли стане потрібно. Далі — за тобою.
          </h1>
          <div className="custom-button2">
            <svg viewBox="0 0 300 70" className="button-frame" preserveAspectRatio="none">
              <path
                d="M15 0 H300 V46 L284 70 H0 V23 Z"
                fill="none"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
            <span className="button-text">для кого</span>
          </div>
          <p className="title-text1">
            Для тих, хто тримає все в собі. Для тих, хто не хоче «вивертати душу», але хоче трохи
            тиші всередині. Для ветеранів. Для військових. Для тих, хто повернувся — але не зовсім.
            Це не терапія. Це — підтримка. Без зайвих слів. Без осуду. Без тиску.
          </p>
          <div className="custom-button2">
            <svg viewBox="0 0 300 70" className="button-frame" preserveAspectRatio="none">
              <path
                d="M15 0 H300 V46 L284 70 H0 V23 Z"
                fill="none"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
            <span className="button-text">чому треба спробувати</span>
          </div>
          <p className="title-text1">
            Бо іноді достатньо, щоб тебе просто хтось почув. Бо не всі можуть говорити з близькими —
            але мовчати важко. Бо тут немає «правильних» відповідей. І нема питань, яких треба
            соромитись. Просто спробуй. Якщо не зайде — ніхто не образиться.
          </p>
        </div>
        <div className="custom-button3">
          <svg viewBox="0 0 300 70" className="button-frame" preserveAspectRatio="none">
            <path d="M15 0 H300 V46 L284 70 H0 V23 Z" fill="none" stroke="white" strokeWidth="4" />
          </svg>
          <span>
            <Link to="/page2" className="button-text">
              скористатись
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
