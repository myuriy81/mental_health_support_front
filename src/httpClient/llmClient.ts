const BACKEND_URL = 'https://mental-health-support-ia90.onrender.com/chat';

export const fetchLLMResponse = async (message: string): Promise<string> => {
  try {
    const res = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });

    if (!res.ok) throw new Error('Помилка мережі');

    const data = await res.json();
    return data.response;
  } catch (err) {
    console.error('Помилка при запиті LLM:', err);
    return 'Помилка: не вдалося отримати відповіді.';
  }
};
