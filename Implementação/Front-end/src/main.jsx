// src/main.jsx

import React from 'react'; // Importa o React
import ReactDOM from 'react-dom/client'; // Importa o ReactDOM para renderização
import App from './App'; // Importa o componente principal App
import './index.css'; // Importa o CSS global

// Renderiza o aplicativo React no elemento com ID 'root' do HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Renderiza o componente App */}
  </React.StrictMode>
);
