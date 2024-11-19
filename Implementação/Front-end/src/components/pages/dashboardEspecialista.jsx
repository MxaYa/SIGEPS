import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardEspecialista = () => {
  const navigate = useNavigate();

  const handleVerChamadosAssociados = () => {
    navigate('/BuscarChamadosEspecialista');
  };

  return (
    <div className="dashboard-container">
      <h1>Painel do Especialista</h1>
      <button onClick={handleVerChamadosAssociados}>Ver Chamados Associados</button>
    </div>
  );
};

export default DashboardEspecialista;
