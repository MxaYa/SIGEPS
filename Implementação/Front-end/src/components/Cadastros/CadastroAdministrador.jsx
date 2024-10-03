import React, { useState } from 'react';
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
    const formData = {
        nomeAdm: formData.nomeAdm,
        emailAdm: formData.emailAdm,
        telefoneAdm: formData.telefoneAdm,
        
    };
    try{
      const response = await fetch('http://localhost:5000/cadastrar_adm', {
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
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroAdministrador;
