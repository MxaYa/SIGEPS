import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastros/Cadastro';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardAdm from './components/pages/dashboardAdm';
import DashboardCliente from './components/pages/dashboardCliente';
import DashboardTriagem from './components/pages/dashboardTriagem';

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
          path="/dashboardAdm"
          element={
            <ProtectedRoute>
              <DashboardAdm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboardCliente"
          element={
            <ProtectedRoute>
              <DashboardCliente />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboardTriagem"
          element={
            <ProtectedRoute>
              <DashboardTriagem />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
