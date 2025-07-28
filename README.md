# Mental Health Support App

A web-based application designed to provide initial psychological assessment and support for individuals experiencing stress, anxiety, depression, or PTSD. 
The methodology for assessing psychological condition was developed by practicing psychiatrists of the highest category.
The app offers a simple interface for users to answer a series of targeted questions, after which it either connects them to a human specialist or initiates a conversation with an AI-powered assistant.

## 🔗 Live Demo

[Visit the app](https://myuriy81.github.io/mental_health_support_front/) 

## 🧠 Key Features

- Multi-step psychological self-assessment forms
- Automatic diagnosis detection (e.g., depression, anxiety, PTSD)
- Dynamic routing based on critical response patterns
- Emergency alert system for high suicide risk
- Integration with LLM (Large Language Model) for initial dialogue
- Escalation to human support when needed
- UI/UX tailored for quick, emotional response and clarity

## 💡 Technologies Used

- **React** + **TypeScript**
- **React Router** – for dynamic routing
- **SCSS** – responsive styling
- **Context API** – state management for answers, diagnosis, and LLM prompt
- **Fetch API** – interaction with the backend and LLM service
- **Vite** – for fast build and development

## ⚙️ Functionality Logic

- `Page3`: Suicide risk screening.
- `Page21`: Depression/Anxiety questionnaire.
- `Page22`: PTSD check.
- `Page4`: LLM support chat (shown in moderate-risk cases).
- `Page5`: Emergency contact and warning display (for high-risk cases).

The prompt sent to LLM is based on **interpreted answers**, not just numeric values, ensuring emotionally relevant input.

## 📁 File Structure Highlights

- `AnswersContext.tsx` – manages user answers, diagnosis, and prompt formation
- `Page3.tsx`, `Page21.tsx`, `Page22.tsx` – form logic and score interpretation
- `Page4.tsx` – chat interface with LLM
- `Page5.tsx` – final alert and support redirection

## 📦 Optimization & UX

- No unnecessary reloads or rerenders
- Clean error handling and fallbacks
- Styled buttons and transitions for emotional clarity
- Mobile-first responsive design
- Red/yellow zone logic for guiding user flows

## 🚨 Safety-Oriented Features

- User never sees their raw "score"
- AI input formatted like a personal message: _"I feel like I’m losing control..."_
- Emergency message displayed in red box if threshold is met

## 📝 Development

To run locally:

```bash
npm install
npm run dev
```

## License

This project is © Timm Thaler, 2025. All rights reserved.

Any reproduction, modification, distribution or commercial use without explicit permission is strictly prohibited.
