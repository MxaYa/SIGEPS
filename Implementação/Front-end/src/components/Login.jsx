import React from 'react';
import './Login.css'; // Certifique-se de ter o CSS adequado
import { useNavigate } from 'react-router-dom';
import logo from './sinais-de-codigo.png'


const Login = () => {
  const navigate = useNavigate();
  const entrar = (e) => {
    e.preventDefault(); // Prevenir o comportamento padrão do formulário
    navigate('/Tela2'); // Navegar para a página Login2
  };


  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Bem vindo de volta</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>Preencha os</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Entrar</h1>
          <span>Preencha os campos abaixo</span>
          <input type="nome" placeholder="Nome" required/>
        
           
          
          
          <input type="email" placeholder="Email"  required/>
          <input type="password" placeholder="Senha" required />
          <a href="#">Esqueceu sua senha?</a>
          <button>Login</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Bem vindo de volta!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" id="login">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            
            <p><h1 className='bemvindo'>Bem vindo ao SIGEPS</h1></p>
            <img src={logo}  className='logo' alt="" />
             

           {/* <button className="hidden" id="register" onClick={entrar}>Cadastre-se</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
