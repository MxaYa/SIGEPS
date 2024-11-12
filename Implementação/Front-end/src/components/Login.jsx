import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import logo from './sinais-de-codigo.png';

const Login = () => {
  const navigate = useNavigate();

  // Corrigir a criação dos estados
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulação de validação do login
    if (email === 'admin@example.com' && password === 'admin') {
      setUserRole('admin');
    } else if (email === 'cliente@example.com' && password === 'cliente') {
      setUserRole('cliente');
    } else if (email === 'triagem@example.com' && password === 'triagem') {
      setUserRole('triagem');
    } else {
      alert('Credenciais inválidas');
      return;
    }

    // Redireciona para o painel adequado baseado na role
    if (userRole === 'admin') {
      navigate('/dashboardAdm');
    } else if (userRole === 'cliente') {
      navigate('/dashboardCliente');
    } else if (userRole === 'triagem') {
      navigate('/dashboardTriagem');
    }
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h1>Entrar</h1>
          <span>Preencha os campos abaixo</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
