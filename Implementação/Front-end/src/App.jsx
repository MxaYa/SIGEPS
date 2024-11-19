import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastros/Cadastro';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardAdm from './components/pages/dashboardAdm';
import DashboardCliente from './components/pages/dashboardCliente';
import DashboardTriagem from './components/pages/dashboardTriagem';
import AberturaChamados from './components/pages/chamado';
import ChamadoClienteSide from './components/pages/ChamadosViewerClienteSide';
import ChamadosTriagemSide from './components/pages/BuscarChamadosTriagemSide';
import ChamadosAberto from './components/pages/ChamadosAberto';
import DashboardEspecialista from './components/pages/dashboardEspecialista';
import BuscarChamadosEspecialista from './components/pages/BuscarChamadosEspecialista';
import CriarSistema from './components/pages/CriarSistema';

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
        <Route path="/chamado" element={<AberturaChamados />} />
        <Route
          path="/chamados-cliente-side"
          element={<ChamadoClienteSide />}
        />
        <Route
          path="/buscar-chamados-Triagem"
          element={<ChamadosTriagemSide />}
        />
        <Route path="/chamados-abertos" element={<ChamadosAberto />} />
        <Route path="/dashboardEspecialista" element={<DashboardEspecialista />} />
        <Route
          path="/BuscarChamadosEspecialista"
          element={<BuscarChamadosEspecialista />}
        />

        {/* Adicionando a Rota para Criar Sistema */}
        <Route
          path="/criar-sistema"
          element={
              <CriarSistema />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
