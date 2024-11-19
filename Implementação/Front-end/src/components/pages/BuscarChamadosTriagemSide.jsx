import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BuscarChamado = () => {
  const [idChamado, setIdChamado] = useState('');
  const [chamado, setChamado] = useState(null);
  const [erro, setErro] = useState('');
  const [novoStatus, setNovoStatus] = useState('');
  const [statusOptions, setStatusOptions] = useState([]);
  const [especialistas, setEspecialistas] = useState([]);
  const [especialistaSelecionado, setEspecialistaSelecionado] = useState('');

  const fetchStatusOptions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/status-chamado');
      setStatusOptions(response.data);
    } catch (error) {
      console.error('Erro ao buscar status:', error);
      setErro('Erro ao carregar os status.');
    }
  };

  useEffect(() => {
    fetchStatusOptions();
  }, []);

  const handleBuscarChamado = async () => {
    if (!idChamado) {
      setErro('Por favor, insira um ID de chamado.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/api/chamados/${idChamado}`);
      setChamado(response.data);
      setErro('');
      setNovoStatus(response.data.codigoStatus_Chamado);
    } catch (error) {
      setErro('Chamado não encontrado ou erro na requisição.');
      setChamado(null);
    }
  };

  const handleAlterarStatus = async () => {
    if (!novoStatus) {
      setErro('Por favor, selecione um novo status.');
      return;
    }

    try {
      const response = await axios.put(`http://localhost:5000/api/chamados/${idChamado}/status`, {
        codigoStatus_Chamado: novoStatus,
      });
      setChamado(response.data);
      setErro('');
      alert('Status alterado com sucesso!');
    } catch (error) {
      console.error('Erro ao alterar o status do chamado:', error);
      setErro('Erro ao alterar o status do chamado.');
    }
  };

  const fetchEspecialistas = async () => {
    try {
      const response = await axios.get('http://localhost:5000/Handlesespecialista/buscaEspecialista');
      setEspecialistas(response.data);
    } catch (error) {
      console.error('Erro ao buscar Especialista:', error);
      setErro('Erro ao carregar os Especialistas.');
    }
  };

  useEffect(() => {
    fetchEspecialistas();
  }, []);

  const handleCriaAssociacao = async (e) => {
    e.preventDefault();

    if (!especialistaSelecionado || !idChamado) {
      alert('Por favor, selecione um especialista e um chamado válido.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/Handlesespecialista/criaAssociacaoEspecialistaChamado/:codigoEspecialista/:numeroChamado', {
        codigoEspecialista: especialistaSelecionado,
        numeroChamado: idChamado,
      });
      alert('Associação criada com sucesso!');
    } catch (error) {
      if (error.response) {
        console.error('Erro no envio:', error.response.data);
        alert('Erro ao realizar a associação: ' + error.response.data.error);
      } else {
        console.error('Erro no envio:', error);
        alert('Ocorreu um erro ao enviar os dados da associação.');
      }
    }
  };

  return (
    <div className="buscar-chamado-container">
      <h2>Buscar Chamado</h2>
      <div className="field-group">
        <label>ID do Chamado</label>
        <input
          type="number"
          value={idChamado}
          onChange={(e) => setIdChamado(e.target.value)}
          placeholder="Digite o ID do Chamado"
        />
      </div>
      <button onClick={handleBuscarChamado}>Buscar</button>

      {erro && <p className="error-message">{erro}</p>}

      {chamado && (
        <div className="chamado-info">
          <h3>Informações do Chamado</h3>
          <p><strong>Título:</strong> {chamado.tituloChamado}</p>
          <p><strong>Descrição:</strong> {chamado.descricaoChamado || 'Descrição não disponível'}</p>
          <p><strong>Status Atual:</strong> {chamado.codigoStatus_Chamado}</p>

          <div className="field-group">
            <h3>Alterar Status de Triagem</h3>
            <select
              value={novoStatus}
              onChange={(e) => setNovoStatus(e.target.value)}
            >
              <option value="">Selecione um Status</option>
              {statusOptions.map((status) => (
                <option key={status.codigoStatus_Chamado} value={status.codigoStatus_Chamado}>
                  {status.nomeStatus_Chamado}
                </option>
              ))}
            </select>
          </div>

          <div className="field-group">
            <h3>Especialista</h3>
            <select
              value={especialistaSelecionado}
              onChange={(e) => setEspecialistaSelecionado(e.target.value)}
            >
              <option value="">Selecione um Especialista</option>
              {especialistas.map(({ codigoEspecialista, nomeEspecialista }) => (
                <option key={codigoEspecialista} value={codigoEspecialista}>
                  {nomeEspecialista}
                </option>
              ))}
            </select>
          </div>

          <button onClick={handleAlterarStatus}>Alterar Status</button>
          <button onClick={handleCriaAssociacao}>Associar Especialista</button>
        </div>
      )}
    </div>
  );
};

export default BuscarChamado;
