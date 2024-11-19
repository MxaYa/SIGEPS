import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardCliente = () => {
  const navigate = useNavigate();

  const handleAbrirChamado = () => {
    navigate('/chamado');
  };

  const handleVerMeusChamados = () => {
    navigate('/chamados-cliente-side'); 
  };

  return (
    <div className="dashboard-container">
      <h1>Painel do Cliente</h1>
      <button onClick={handleAbrirChamado}>Abrir Chamado</button>
      <button onClick={handleVerMeusChamados}>Ver Meus Chamados</button> 
    </div>
  );
};

export default DashboardCliente;
