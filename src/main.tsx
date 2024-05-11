import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/providers/theme-provider';

import App from '@/app';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider
      defaultTheme='dark'
      storageKey='vite-ui-theme'
    >
      <App />
      <Toaster />
    </ThemeProvider>
  </BrowserRouter>
);
