import React, { useState, useEffect } from 'react';
import './Styles/Stylechamado.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AberturaChamados = () => {
  const [formData, setFormData] = useState({
    tituloChamado: '',
    descricaoChamado: '',
    codigoCliente: '',
    codigoSistema: '',
    codigoTipo_Manutencao: '',
  });

  const [sistemas, setSistemas] = useState([]);
  const [tiposManutencao, setTiposManutencao] = useState([]);
  const [loadingSistemas, setLoadingSistemas] = useState(true);
  const [loadingTiposManutencao, setLoadingTiposManutencao] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('http://localhost:5000/api/sistemas')
      .then(response => {
        setSistemas(response.data);
        setLoadingSistemas(false);
      })
      .catch(error => {
        console.error('Erro ao carregar sistemas:', error);
        setError('Erro ao carregar sistemas.');
        setLoadingSistemas(false);
      });

    axios.get('http://localhost:5000/api/tipos-manutencao')
      .then(response => {
        setTiposManutencao(response.data);
        setLoadingTiposManutencao(false);
      })
      .catch(error => {
        console.error('Erro ao carregar tipos de manutenção:', error);
        setError('Erro ao carregar tipos de manutenção.');
        setLoadingTiposManutencao(false);
      });

    const codigoCliente = localStorage.getItem('codigo');
    if (codigoCliente) {
      setFormData(prevData => ({
        ...prevData,
        codigoCliente,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { codigoTriagem, ...dataToSend } = formData;

      const response = await axios.post('http://localhost:5000/api/chamados', dataToSend);
      alert('Chamado criado com sucesso!');
      console.log(response.data);
      navigate('/dashboardCliente');
    } catch (error) {
      console.error('Erro ao criar chamado:', error);
      alert('Erro ao criar chamado.');
    }
  };

  return (
    <div>
      <h2>Abertura de Chamado</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título do Chamado</label>
          <input
            type="text"
            name="tituloChamado"
            value={formData.tituloChamado}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descrição</label>
          <textarea
            name="descricaoChamado"
            value={formData.descricaoChamado}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Código do Cliente</label>
          <input
            type="number"
            name="codigoCliente"
            value={formData.codigoCliente}
            readOnly
          />
        </div>
        <div>
          <label>Sistema</label>
          <select
            name="codigoSistema"
            value={formData.codigoSistema}
            onChange={handleChange}
          >
            <option value="">Selecione um Sistema</option>
            {sistemas.map(sistema => (
              <option key={sistema.codigoSistema} value={sistema.codigoSistema}>
                {sistema.nomeSistema}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Tipo de Manutenção</label>
          <select
            name="codigoTipo_Manutencao"
            value={formData.codigoTipo_Manutencao}
            onChange={handleChange}
          >
            <option value="">Selecione um Tipo de Manutenção</option>
            {tiposManutencao.map(tipo => (
              <option key={tipo.codigoTipo_Manutencao} value={tipo.codigoTipo_Manutencao}>
                {tipo.nomeTipo_Manutencao}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Abrir Chamado</button>
      </form>
    </div>
  );
};

export default AberturaChamados;
