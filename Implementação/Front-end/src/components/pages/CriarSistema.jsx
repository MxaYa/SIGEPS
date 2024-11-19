import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles/StyleCriarSistema.css';

const CriarSistema = () => {
  const [nomeSistema, setNomeSistema] = useState('');
  const [codigoTipoSistema, setCodigoTipoSistema] = useState('');
  const [tiposSistema, setTiposSistema] = useState([]);
  const [error, setError] = useState('');

  // Carregar os tipos de sistema da API ao montar o componente
  useEffect(() => {
    const fetchTiposSistema = async () => {
      try {
        const response = await axios.get('http://localhost:5000/criasistema/tipossistema');
        if (Array.isArray(response.data)) {
          setTiposSistema(response.data);
        } else {
          setError('Resposta inválida da API');
        }
      } catch (err) {
        console.error('Erro ao carregar tipos de sistema:', err);
        setError('Erro ao carregar tipos de sistema');
      }
    };

    fetchTiposSistema();
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica
    if (!nomeSistema || !codigoTipoSistema) {
      setError('Nome do sistema e tipo de sistema são obrigatórios');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/criasistema', {
        nomeSistema,
        codigoTipo_Sistema: codigoTipoSistema
      });

      console.log('Sistema criado com sucesso:', response.data);
      // Limpar campos após sucesso
      setNomeSistema('');
      setCodigoTipoSistema('');
      setError('');
    } catch (err) {
      console.error('Erro ao criar sistema:', err);
      setError('Erro ao criar sistema');
    }
  };

  return (
    <div className="abertura-chamados-container">
      <div className="abertura-chamados-header">
        <h2>Criar Novo Sistema</h2>
      </div>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div>
            <label htmlFor="nomeSistema">Nome do Sistema</label>
            <input
              type="text"
              id="nomeSistema"
              name="nomeSistema"
              value={nomeSistema}
              onChange={(e) => setNomeSistema(e.target.value)}
              placeholder="Digite o nome do sistema"
            />
          </div>

          <div>
            <label htmlFor="codigoTipoSistema">Tipo de Sistema</label>
            <select
              id="codigoTipoSistema"
              name="codigoTipoSistema"
              value={codigoTipoSistema}
              onChange={(e) => setCodigoTipoSistema(e.target.value)}
            >
              <option value="">Selecione o tipo de sistema</option>
              {tiposSistema.map((tipo) => (
                <option key={tipo.codigoTipo_Sistema} value={tipo.codigoTipo_Sistema}>
                  {tipo.nomeTipo_Sistema}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="submit-button">Criar Sistema</button>
      </form>
    </div>
  );
};

export default CriarSistema;
