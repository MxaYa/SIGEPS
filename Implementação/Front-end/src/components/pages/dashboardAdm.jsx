import React from 'react';
import './Styles/StyleDashBoard.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout, isAuthenticated, isLoading } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const isAdmin = user && user['https://seuapp.com/roles']?.includes('admin');

  if (isLoading) return <div>Carregando...</div>;

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Painel do Administrador</h1>
        <button onClick={handleLogout} className="logout-button">Sair</button>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2>Gerenciar Usuários</h2>
          <p>Aqui você pode adicionar, editar ou remover usuários.</p>
          <button className="action-button">Ir para Gerenciamento de Usuários</button>
        </div>
        <div className="dashboard-section">
          <h2>Relatórios</h2>
          <p>Visualize relatórios detalhados do sistema.</p>
          <button className="action-button">Ver Relatórios</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
