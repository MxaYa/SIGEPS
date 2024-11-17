import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardTriagem = () => {
  const navigate = useNavigate();

  const handleBuscarChamados = () => {
    navigate('/buscar-chamados-Triagem');
  };

  const handleChamadosAbertos = () => {
    navigate('/chamados-abertos');
  };

  return (
    <div className="dashboard-container">
      <h1>Painel de Triagem</h1>
      <button onClick={handleBuscarChamados}>Buscar Chamados</button>
      <button onClick={handleChamadosAbertos}>Chamados Abertos</button>
    </div>
  );
};

export default DashboardTriagem;
