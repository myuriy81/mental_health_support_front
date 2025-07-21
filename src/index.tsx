import { createRoot } from 'react-dom/client';
import { Root } from './Root';

createRoot(document.getElementById('root') as HTMLElement).render(
  <div className="wrapper">
    <Root />
  </div>
);
