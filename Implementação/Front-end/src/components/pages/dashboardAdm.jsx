import React from 'react';
import './Styles/StyleDashBoard.css';

const Dashboard = () => {

  const handleLogout = () => {
    // Implemente aqui a função para logout, se necessário
    window.location.href = "/"; // Apenas redireciona para a página inicial
  };

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
