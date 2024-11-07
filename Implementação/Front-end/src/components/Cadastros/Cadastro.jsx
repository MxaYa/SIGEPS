import React, { useState, useEffect } from 'react';
import "./Styles/Cadastro.css";
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import CadastroCliente from './CadastroCliente';
import CadastroEspecialista from './CadastroEspecialista';
import CadastroTriagem from './CadastroTriagem';
import CadastroAdministrador from './CadastroAdministrador';

const Cadastro = () => {
  const { isAuthenticated, user, logout } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem('loggedUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('loggedUser');
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const [tipoCadastro, setTipoCadastro] = useState('');

  const handleSelectChange = (e) => {
    setTipoCadastro(e.target.value);
  };

  const renderForm = () => {
    switch (tipoCadastro) {
      case 'cliente':
        return <CadastroCliente />;
      case 'especialista':
        return <CadastroEspecialista />;
      case 'triagem':
        return <CadastroTriagem />;
      case 'administrador':
        return <CadastroAdministrador />;
      default:
        return <p>Por favor, selecione o tipo de cadastro no menu acima.</p>;
    }
  };

  return (
    <div className="cadastro-container" id="cadastro-container">
      <div className="cadastro-form-container">
        <h1>Criar conta</h1>
        <span>Selecione o tipo de cadastro:</span>
        <div className="cadastro-input-group">
          <label htmlFor="tipoCadastro">Tipo de Cadastro</label>
          <select id="tipoCadastro" onChange={handleSelectChange} value={tipoCadastro}>
            <option value="">Selecione...</option>
            <option value="cliente">Cliente</option>
            <option value="especialista">Especialista</option>
            <option value="triagem">Operador de Triagem</option>
            <option value="administrador">Administrador</option>
          </select>
        </div>
        {renderForm()}
        {isAuthenticated && (
          <button onClick={() => logout()}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Cadastro;
