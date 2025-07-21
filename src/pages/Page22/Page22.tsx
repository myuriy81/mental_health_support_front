import './Page22.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAnswers } from '../../context/AnswersContext';

export const Page22 = () => {
  const navigate = useNavigate();
  const { setPromptAnswersFromPage, setDiagnosis } = useAnswers();

  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const questions = [
    'Ваша діяльність проходила в умовах загрози для життя?',
    'Ви швидко реагуєте на різкі звуки, що нагадують про травматичні події минулого?',
    'Ви відчуваєте відчуженість до інших людей?',
    'Вам достатньо невеликої дрібниці, щоб почати гніватись?',
    'Ви намагаєтесь уникати спогадів про травматичні події?',
    'Ви відчуваєте провину за деякі речі, що робили раніше?',
    'Ви маєте проблеми зі сном?'
  ];

  const handleSelect = (question: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
  };

  useEffect(() => {
    if (Object.keys(answers).length === questions.length) {
      const takCount = Object.values(answers).filter((val) => val === 'так').length;

      const selected = questions
        .map((q, i) => {
          const val = answers[`q${i}`];
          return val === 'так' ? `${i + 1}. ${q}` : null;
        })
        .filter(Boolean) as string[];

      setPromptAnswersFromPage(selected);
      setDiagnosis(takCount >= 4 ? 'птср' : '');

      if (takCount >= 4) {
        navigate('/page5');
      } else {
        navigate('/page4');
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers]);

  return (
    <div className="page22">
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
            <span className="button-text">обери відповідь</span>
          </div>

          <div className="questionnaire-pairs">
            {questions.map((q, i) => (
              <div className="question-pair" key={i}>
                <span className="question-text">{`${i + 1}. ${q}`}</span>
                <div className="options">
                  <label className="option">
                    <input
                      type="radio"
                      name={`q${i}`}
                      value="так"
                      onChange={() => handleSelect(`q${i}`, 'так')}
                    />
                    <span>Так</span>
                  </label>
                  <label className="option">
                    <input
                      type="radio"
                      name={`q${i}`}
                      value="ні"
                      onChange={() => handleSelect(`q${i}`, 'ні')}
                    />
                    <span>Ні</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
