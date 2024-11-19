import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate
import './Styles/StyleDashBoard.css'; // Certifique-se de que o caminho esteja correto

const DashboardAdmin = () => {
  const navigate = useNavigate(); // Usando useNavigate para navegação

  // Função que redireciona para a tela de cadastro de usuário
  const goToCadastro = () => {
    navigate("/cadastro"); // Redireciona para a página de cadastro
  };

  // Função que redireciona para a tela de criação de sistema
  const goToCriarSistema = () => {
    navigate("/criar-sistema"); // Redireciona para a página de criação de sistema
  };

  // Função para fazer logout (caso queira implementar)
  const handleLogout = () => {
    // Aqui você pode adicionar lógica de logout, como limpar sessões ou tokens
    navigate("/"); // Redireciona para a página inicial ou login
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Painel do Administrador</h1>
        <button onClick={handleLogout} className="logout-button">Sair</button> {/* Botão de logout */}
      </div>
      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2>Gerenciar Usuários</h2>
          <button onClick={goToCadastro} className="action-button">Cadastrar Usuário</button> 
        </div>

        {/* Seção para Criar Sistema */}
        <div className="dashboard-section">
          <h2>Gerenciar Sistemas</h2>
          <button onClick={goToCriarSistema} className="action-button">Criar Sistema</button> {/* Botão para criação de sistemas */}
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
