import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import logo from './sinais-de-codigo.png';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [userRole, setUserRole] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        senha,
      });
  
      const { role, codigoCliente } = response.data;
  
      localStorage.setItem('role', role);
      localStorage.setItem('codigoCliente', codigoCliente);
  
      if (role === 'administrador') {
        navigate('/dashboardAdm');
      } else if (role === 'clientes') {
        navigate('/dashboardCliente');
      } else if (role === 'especialistas') {
        navigate('/dashboardEspecialista');
      } else if (role === 'triagem') {
        navigate('/dashboardTriagem');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('Credenciais inválidas');
      } else {
        console.error('Erro no login:', error);
        alert('Erro no servidor');
      }
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
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          
          {/* {}
          <select value={userRole} onChange={(e) => setUserRole(e.target.value)} required>
            <option value="">Selecione o tipo de usuário</option>
            <option value="admin">Administrador</option>
            <option value="cliente">Cliente</option>
            <option value="especialista">Especialista</option>
            <option value="triagem">Triagem</option>
          </select> */}
          
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
