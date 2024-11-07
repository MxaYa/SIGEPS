import React, { useState } from 'react';
import Axios from 'axios';
import "./Styles/Cadastro.css";

const CadastroAdministrador = () => {
  const [formData, setFormData] = useState({
    nomeAdm: '',
    emailAdm: '',
    telefoneAdm: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:5000/Handlesadm/criaAdm', formData);
      console.log('Resposta do servidor:', response.data);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      if (error.response) {
        console.error('Erro no envio:', error.response.data);
        alert('Erro ao realizar o cadastro: ' + error.response.data.error);
      } else {
        console.error('Erro no envio:', error);
        alert('Ocorreu um erro ao enviar os dados do cadastro.');
      }
    }
  };

  return (
    <div className="cadastro-container" id="cadastro-container">
      <div className="cadastro-form-container">
        <form onSubmit={handleSubmit}>
          <h1>Cadastro de Administrador</h1>
          <span>Preencha os campos abaixo</span>
          <div className="cadastro-input-group">
            <label htmlFor="nomeAdm">Nome</label>
            <input
              type="text"
              name="nomeAdm"
              value={formData.nomeAdm}
              onChange={handleChange}
              placeholder="Nome"
              required
            />
          </div>
          <div className="cadastro-input-group">
            <label htmlFor="emailAdm">Email</label>
            <input
              type="email"
              name="emailAdm"
              value={formData.emailAdm}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="cadastro-input-group">
            <label htmlFor="telefoneAdm">Telefone</label>
            <input
              type="tel"
              name="telefoneAdm"
              value={formData.telefoneAdm}
              onChange={handleChange}
              placeholder="Telefone"
              required
            />
          </div>
          <div className="cadastro-input-group">
            <label htmlFor="senhaAdm">Telefone</label>
            <input
              type="tel"
              name="telefoneAdm"
              value={formData.telefoneAdm}
              onChange={handleChange}
              placeholder="Telefone"
              required
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroAdministrador;
