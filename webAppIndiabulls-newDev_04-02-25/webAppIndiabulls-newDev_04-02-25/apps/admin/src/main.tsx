import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '../src/styles/style.scss';

createRoot(document.getElementById('root')!).render(
    <App />
)
