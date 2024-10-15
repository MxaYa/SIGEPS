import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastros/Cadastro';
import ProtectedRoute from './components/ProtectedRoute';
console.log('Domain:', import.meta.env.VITE_AUTH0_DOMAIN);
console.log('Client ID:', import.meta.env.VITE_AUTH0_CLIENT_ID);

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/cadastro"
            element={
              <ProtectedRoute>
                <Cadastro />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;
