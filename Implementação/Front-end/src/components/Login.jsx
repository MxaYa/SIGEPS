import React from 'react';
import './Login.css'; // Importando o CSS do componente

const Login = () => {
  return (
    <div className="login-page">
      <div className="left-panel">
        <h1>Bem vindo de volta</h1>
        <p>Acesse sua conta agora mesmo</p>
        <button className="login-button">Entrar</button>
      </div>
      <div className="right-panel">
        <div className="login-card">
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Digite seu email" />
          </div>
          <div className="input-group">
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" placeholder="Digite seu usuário" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha" />
          </div>
          <button className="register-button">Cadastrar</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
