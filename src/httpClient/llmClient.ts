const BACKEND_URL = 'https://c3530fa1df1e.ngrok-free.app/generate';

export const fetchLLMResponse = async (prompt: string): Promise<string> => {
  try {
    const res = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) throw new Error('Помилка мережі');

    const data = await res.json();
    return data.response;
  } catch (err) {
    console.error('Помилка при запиті LLM:', err);
    return 'Помилка: не вдалося отримати відповіді.';
  }
};
