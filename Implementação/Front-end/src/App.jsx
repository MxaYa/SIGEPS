import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastros/Cadastro';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/pages/dashboardAdm';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/cadastro"
            element={
              <ProtectedRoute>
                <Cadastro />
              </ProtectedRoute>
            }
          />
          <Route
            path='/dashboardAdm'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
   
  );
}

export default App;
