import * as React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import '@fontsource/inter/variable.css'
import '@fontsource/open-sans/variable.css'

createRoot(document.getElementById("root")!).render(<App />);