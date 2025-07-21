import './Page3.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnswers } from '../../context/AnswersContext';

export const Page3 = () => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();
  const { setPromptAnswersFromPage, setDiagnosis } = useAnswers();

  const totalQuestions = 6;
  const expectedKeys = Array.from({ length: totalQuestions }, (_, i) => `q${i}`);

  const handleSelect = (question: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
  };

  useEffect(() => {
    const allAnswered = expectedKeys.every(
      (key) => answers[key] !== undefined && answers[key] !== ''
    );

    if (!allAnswered) return;

    const sum = expectedKeys.reduce((acc, key) => acc + parseInt(answers[key], 10), 0);

    const promptText = [
      'Оцінка ризику суїциду:',
      `Сума відповідей: ${sum}`,
      ...expectedKeys.map((key, i) => `Питання ${i + 1}: ${answers[key]}`)
    ];

    setPromptAnswersFromPage(promptText);

    if (sum >= 21) {
      setDiagnosis('суїцид');
      navigate('/page5');
    } else {
      navigate('/page4');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers]);

  const questionBlock = (question: string, options: string[], index: number) => (
    <div className="question-block" key={index}>
      <h2 className="title-text1">
        {index + 1}. {question}
      </h2>
      <div className="options-horizontal">
        <span className="edge-label">Зовсім ні</span>
        {options.map((opt) => (
          <label className="radio-option" key={opt}>
            <input
              type="radio"
              name={`q${index}`}
              value={opt}
              checked={answers[`q${index}`] === opt}
              onChange={() => handleSelect(`q${index}`, opt)}
            />
            <span className="custom-radio" />
            <span className="option-label">{opt}</span>
          </label>
        ))}
        <span className="edge-label">Дуже сильно</span>
      </div>
    </div>
  );

  return (
    <div className="page3">
      <div className="page1-content">
        <div className="content-box1">
          <div className="custom-buttonQuestion3">
            <svg viewBox="0 0 300 70" className="button-frame" preserveAspectRatio="none">
              <path
                d="M15 0 H300 V46 L284 70 H0 V23 Z"
                fill="none"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
            <span className="button-text">
              Оберіть кожну відповідь, що відповідає вашим думкам чи досвіду.
            </span>
          </div>

          {/* Вопрос 1 — ручной */}
          <div className="question-block">
            <h2 className="title-text1">
              1. Ви коли-небудь думали про самогубство або намагалися його вчинити?
            </h2>
            <div className="options-column">
              {[
                { value: '0', label: 'Ніколи' },
                { value: '1', label: 'Це була лише коротка, мимохідна думка' },
                {
                  value: '2',
                  label:
                    'Принаймні один раз у мене був план накласти на себе руки, але я не намагався це зробити'
                },
                {
                  value: '3',
                  label: 'Я намагався накласти на себе руки, але не хотів помирати'
                },
                {
                  value: '4',
                  label: 'Я хоча б раз планував накласти на себе руки і дійсно хотів померти'
                },
                {
                  value: '5',
                  label: 'Я намагався накласти на себе руки і дійсно хотів померти'
                }
              ].map((opt) => (
                <label className="radio-option" key={opt.value}>
                  <input
                    type="radio"
                    name="q0"
                    value={opt.value}
                    checked={answers['q0'] === opt.value}
                    onChange={() => handleSelect('q0', opt.value)}
                  />
                  <span className="custom-radio" />
                  <span className="option-label">
                    <strong>{opt.value}.</strong> {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Остальные 5 вопросов */}
          {questionBlock(
            'Як часто Ви думали про самогубство протягом останнього року?',
            ['0', '1', '2', '3', '4', '5'],
            1
          )}
          {questionBlock(
            'Чи були у Вас протягом останнього року внутрішні дебати щодо того, жити чи померти?',
            ['0', '1', '2', '3', '4', '5'],
            2
          )}
          {questionBlock(
            'Наскільки сильно Ви хочете жити зараз?',
            ['0', '1', '2', '3', '4', '5'],
            3
          )}
          {questionBlock(
            'Наскільки сильно Ви зараз хочете померти?',
            ['0', '1', '2', '3', '4', '5', '6', '7'],
            4
          )}
          {questionBlock(
            'Наскільки ймовірно, що Ви колись спробуєте покінчити життя самогубством?',
            ['0', '1', '2', '3', '4', '5'],
            5
          )}
        </div>
      </div>
    </div>
  );
};
