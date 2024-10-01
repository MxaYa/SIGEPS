// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Importando o componente de Login
import Tela2 from './components/Tela2'; // Importando a nova página de Login2

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Renderizando o componente de Login na rota raiz */}
      <Route path="/Tela2" element={<Tela2 />} /> {/* Renderizando o componente Login2 na rota /login2 */}
      </Routes>
    </Router>
  );
}

export default App;
