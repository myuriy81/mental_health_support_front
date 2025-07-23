import './Page4.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchLLMResponse } from '../../httpClient/llmClient';
import { useAnswers } from '../../context/AnswersContext';

type Message = {
  sender: 'user' | 'ai';
  text: string;
};

export const Page4 = () => {
  const { promptAnswers } = useAnswers();
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const [initialAutoMessage, setInitialAutoMessage] = useState(true);

  const handleSend = useCallback(
    async (customInput?: string, hideUserMessage = false) => {
      const text = (customInput ?? input).trim();
      if (!text) return;

      let updatedChat = [...chat];

      if (!hideUserMessage) {
        const userMsg: Message = { sender: 'user', text };
        updatedChat = [...updatedChat, userMsg];
        setChat(updatedChat);
      }

      setLoading(true);

      const messagesForLLM: { role: 'user' | 'assistant' | 'system'; content: string }[] = [
        ...updatedChat.map((msg) => ({
          role: (msg.sender === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
          content: msg.text
        })),
        ...(customInput ? [{ role: 'user' as const, content: customInput }] : [])
      ];

      const aiResponse = await fetchLLMResponse(messagesForLLM);
      const aiMsg: Message = { sender: 'ai', text: aiResponse };

      setChat((prev) => [...prev, aiMsg]);
      if (!customInput) setInput('');
      setLoading(false);
    },
    [input, chat]
  );

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  useEffect(() => {
    const chatEl = chatWindowRef.current;
    if (chatEl) {
      const maxHeight = 1500;
      if (chatEl.scrollHeight > maxHeight) {
        chatEl.style.height = `${maxHeight}px`;
        chatEl.style.overflowY = 'auto';
      } else {
        chatEl.style.height = 'auto';
        chatEl.style.overflowY = 'visible';
      }
    }
  }, [chat]);

  useEffect(() => {
    console.log('Page4 promptAnswers:', promptAnswers); //ллыддыджыоовллылыооыоыо
    if (promptAnswers.length > 0 && chat.length === 0 && initialAutoMessage) {
      const fullPrompt = promptAnswers.join('\n');
      handleSend(fullPrompt, true);
      setInitialAutoMessage(false);
    }
  }, [promptAnswers, chat.length, handleSend, initialAutoMessage]);

  return (
    <div className="page4">
      <p className="title-text4">онлайн психолог</p>
      <p className="text4">дочекайся першої відповіді</p>

      <div className="chat-interface">
        <div className="framed-box">
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
            <button
              className="custom-submit-button"
              onClick={() => handleSend()}
              disabled={loading}
            >
              <svg viewBox="0 0 160 50" className="button-frame" preserveAspectRatio="none">
                <path
                  d="M10 0 H160 V33 L150 50 H0 V16 Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                />
              </svg>
              <span className="button-text">відправити</span>
            </button>
          </div>
        </div>

        <div className="framed-box">
          <div ref={chatWindowRef} className={`chat-window${chat.length === 0 ? ' empty' : ''}`}>
            {chat.map((msg, index) => (
              <p key={index} className={msg.sender === 'user' ? 'user' : 'ai'}>
                {msg.sender === 'user' ? '👨‍✈️: ' : '👩‍⚕️: '}
                {msg.text}
              </p>
            ))}
            {loading && <p className="ai">👩‍⚕️: Печатает...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
