import React, { useState } from 'react';
import Axios from 'axios';
import "./Styles/Cadastro.css";

const CadastroCliente = () => {
  const [formData, setFormData] = useState({
    nomeCliente: '',
    emailCliente: '',
    telefoneCliente: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:5000/accounts/signup/cliente', formData);
      console.log('Resposta do servidor:', response.data); // Logar a resposta do servidor
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      // Verificar se a resposta tem um erro
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
          <h1>Cadastro de Cliente</h1>
          <span>Preencha os campos abaixo</span>
          <div className="cadastro-input-group">
            <label htmlFor="nomeCliente">Nome</label>
            <input
              type="text"
              name="nomeCliente"
              value={formData.nomeCliente}
              onChange={handleChange}
              placeholder="Nome"
              required
            />
          </div>
          <div className="cadastro-input-group">
            <label htmlFor="emailCliente">Email</label>
            <input
              type="email"
              name="emailCliente"
              value={formData.emailCliente}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="cadastro-input-group">
            <label htmlFor="telefoneCliente">Telefone</label>
            <input
              type="tel"
              name="telefoneCliente"
              value={formData.telefoneCliente}
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

export default CadastroCliente;
