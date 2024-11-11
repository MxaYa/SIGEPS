import React, { useState } from 'react';
import "./Styles/Cadastro.css";
import CadastroCliente from './CadastroCliente';
import CadastroEspecialista from './CadastroEspecialista';
import CadastroTriagem from './CadastroTriagem';
import CadastroAdministrador from './CadastroAdministrador';

const Cadastro = () => {
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
      </div>
    </div>
  );
};

export default Cadastro;
