import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { Page4 } from './pages/Page4';
import { NotFoundPage } from './pages/NotFoundPage';
import { Page5 } from './pages/Page5';
import { Page21 } from './pages/Page21';
import { Page22 } from './pages/Page22';
import { ScrollToTop } from './utils/ScrollToTop';
import { AnswersProvider } from './context/AnswersContext';

export const Root = () => {
  return (
    <AnswersProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="page4" element={<Page4 />} />
            <Route path="page5" element={<Page5 />} />
            <Route path="page21" element={<Page21 />} />
            <Route path="page22" element={<Page22 />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </AnswersProvider>
  );
};
