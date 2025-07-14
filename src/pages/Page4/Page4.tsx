import './Page4.scss';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { fetchLLMResponse } from '../../httpClient/llmClient';

type Message = {
  sender: 'user' | 'ai';
  text: string;
};

export const Page4 = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { sender: 'user', text: input };
    setChat((prev) => [...prev, userMsg]);
    setLoading(true);

    const aiResponse = await fetchLLMResponse(input);
    const aiMsg: Message = { sender: 'ai', text: aiResponse };

    setChat((prev) => [...prev, aiMsg]);
    setInput('');
    setLoading(false);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  return (
    <div className="page4">
      <h1>Page 4</h1>

      <div className="chat-interface">
        <div className="input-section">
          <textarea
            ref={textareaRef}
            placeholder="Розкажи, що тебе турбує..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <button onClick={handleSend} disabled={loading}>
            Відправити
          </button>
        </div>

        <div className={`chat-window${chat.length === 0 ? ' empty' : ''}`}>
          {chat.map((msg, index) => (
            <p key={index} className={msg.sender === 'user' ? 'user' : 'ai'}>
              {msg.sender === 'user' ? '🧑: ' : '🤖: '}
              {msg.text}
            </p>
          ))}
          {loading && <p className="ai">🤖: Печатает...</p>}
        </div>
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
