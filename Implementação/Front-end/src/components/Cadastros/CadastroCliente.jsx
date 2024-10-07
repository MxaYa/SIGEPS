import React, { useState } from 'react';
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
    const formData = {
        nomeCliente: formData.nomeCliente,
        emailCliente: formData.emailCliente,
        telefoneCliente: formData.telefoneCliente,
        
    };
    try{
      const response = await fetch('http://localhost:5000/accounts/signup/cliente', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
          const data = await response.json();
          alert('Cadastro realizado com sucesso!');
      } else {
          alert('Erro ao realizar o cadastro');
      }
    } catch (error) {
        console.error('Erro no envio: ', error);
        alert('Ocorreu um erro ao enviar os dados do cadastro.');
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
