import React, { useState } from 'react';
import "./Styles/Cadastro.css";

const CadastroTriagem = () => {
  const [formData, setFormData] = useState({
    nomeTriagem: '',
    emailTriagem: '',
    telefoneTriagem: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
        nomeTriagem: formData.nomeTriagem,
        emailTriagem: formData.emailTriagem,
        telefoneTriagem: formData.telefoneTriagem,
        
    };
    try{
      const response = await fetch('http://localhost:5000/cadastrar_triagem', {
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
          <h1>Cadastro de Operador de Triagem</h1>
          <span>Preencha os campos abaixo</span>
          <div className="cadastro-input-group">
            <label htmlFor="nomeTriagem">Nome</label>
            <input
              type="text"
              name="nomeTriagem"
              value={formData.nomeTriagem}
              onChange={handleChange}
              placeholder="Nome"
              required
            />
          </div>
          <div className="cadastro-input-group">
            <label htmlFor="emailTriagem">Email</label>
            <input
              type="email"
              name="emailTriagem"
              value={formData.emailTriagem}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="cadastro-input-group">
            <label htmlFor="telefoneTriagem">Telefone</label>
            <input
              type="tel"
              name="telefoneTriagem"
              value={formData.telefoneTriagem}
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

export default CadastroTriagem;
