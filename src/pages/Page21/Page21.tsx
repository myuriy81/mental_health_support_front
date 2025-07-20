import './Page21.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Page21 = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean[]>(Array(8).fill(false));

  const handleCheck = (index: number) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  const handleSubmit = () => {
    const totalChecked = checked.filter(Boolean).length;
    const firstGroup = checked.slice(0, 4).filter(Boolean).length;
    const secondGroup = checked.slice(4, 8).filter(Boolean).length;

    if (totalChecked >= 6 || firstGroup >= 3 || secondGroup >= 3) {
      navigate('/page5');
    } else {
      navigate('/page4');
    }
  };

  const questions = [
    'Чи відчуваєте Ви постійний сум та пригніченість?',
    'Чи відчуваєте Ви насолоду від життя?',
    'Чи відчуваєте Ви постійну безпричинну втому та виснаження?',
    'Чи бувають у Вас думки про власну непотрібність, зайвість?',
    'Чи бувають у Вас відчуття безпричинного страху, тривоги?',
    'Чи відчуваєте Ви постійну напругу у тілі, неможливість розслабитись?',
    'Чи є у Вас відчуття внутрішнього тремтіння, ознобу?',
    'Чи турбують Вас думки, що в майбутньому станеться щось погане?'
  ];

  return (
    <div className="page21">
      <div className="page1-content">
        <div className="content-box21">
          <div className="custom-buttonQuestion2">
            <svg viewBox="0 0 300 70" className="button-frame" preserveAspectRatio="none">
              <path
                d="M15 0 H300 V46 L284 70 H0 V23 Z"
                fill="none"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
            <span className="button-text">обери які почуття відповідають тобі</span>
          </div>

          <div className="questionnaire-list">
            {questions.map((question, index) => (
              <label className="question-item" key={index}>
                <input
                  type="checkbox"
                  className="question-checkbox"
                  checked={checked[index]}
                  onChange={() => handleCheck(index)}
                />
                <span className="question-text">
                  {index + 1}. {question}
                </span>
              </label>
            ))}
          </div>

          <div className="custom-button21" onClick={handleSubmit}>
            <svg viewBox="0 0 300 70" className="button-frame" preserveAspectRatio="none">
              <path
                d="M15 0 H300 V46 L284 70 H0 V23 Z"
                fill="none"
                stroke="#00f0ff"
                strokeWidth="4"
              />
            </svg>
            <span className="button-text">обробити відповіді</span>
          </div>
        </div>
      </div>
    </div>
  );
};
