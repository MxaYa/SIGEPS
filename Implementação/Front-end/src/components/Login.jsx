import React from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; 
import logo from './sinais-de-codigo.png';

const Login = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginWithRedirect(); 
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Bem-vindo de volta</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>Preencha os campos abaixo para se cadastrar</span>
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}> {/* Call handleLogin on submit */}
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
            <img src={logo} className='logo' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
