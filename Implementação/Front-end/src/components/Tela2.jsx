import React from 'react';
import './Tela2.css'; // Certifique-se de ter o arquivo CSS adequado

const Tela2 = () => {
  return (
    <div className="tela2-container" id="tela2-container">
      <div className="tela2-form-container">
        <form>
          <h1>Criar conta</h1>
          <span>Preencha os campos abaixo</span>
          <div className="tela2-input-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Nome" required />
          </div>
          <div className="tela2-input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="tela2-input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Senha" required />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Tela2;
