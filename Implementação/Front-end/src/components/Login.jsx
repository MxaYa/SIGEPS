import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import logo from './sinais-de-codigo.png';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('./Cadastro'); // Redireciona diretamente para o dashboard
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h1>Entrar</h1>
          <span>Preencha os campos abaixo</span>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <a href="#">Esqueceu sua senha?</a>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Bem-vindo de volta!</h1>
            <p>Entre com seus dados pessoais para usar todos os recursos do site</p>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 className='bemvindo'>Bem-vindo ao SIGEPS</h1>
            <img src={logo} className='logo' alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
