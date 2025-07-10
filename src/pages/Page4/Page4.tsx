import './Page4.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Page4 = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<string[]>([]);

  const handleSend = () => {
    if (!input.trim()) return;

    setChat(prev => [...prev, `🧑: ${input}`, `🤖: (ответ LLM)`]);
    setInput('');
  };

  return (
    <div className="page4">
      <h1>Page 4</h1>

      <div className="chat-interface">
        <div className="input-section">
          <input
            type="text"
            placeholder="Напиши что-нибудь..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
          />
          <button onClick={handleSend}>Отправить</button>
        </div>

        <div className="chat-window">
          {chat.map((msg, index) => (
            <p key={index} className={msg.startsWith('🧑') ? 'user' : 'ai'}>
              {msg}
            </p>
          ))}
        </div>
      </div>

      <Link
        to="/"
        className="back-home"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        На главную
      </Link>
    </div>
  );
};
