import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './app.tsx';
import ModalProvider from './contexts/modal-context.tsx';
import { QueryProvider } from './providers/QueryProvider.tsx';

// ----------------------------------------------------------------------

const rootElement = document.getElementById('root') as HTMLElement;

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <HelmetProvider>
    <QueryProvider>
      <BrowserRouter>
        <Suspense fallback={null}>
          <ModalProvider>
            <App />
            <ToastContainer style={{ zIndex: 100000000 }} theme="light" />
          </ModalProvider>
        </Suspense>
      </BrowserRouter>
    </QueryProvider>
  </HelmetProvider>
);
