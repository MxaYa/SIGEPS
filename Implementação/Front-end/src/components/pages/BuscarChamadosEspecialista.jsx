import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Styles/TelaEspecialista.css';

const TelaEspecialista = ({ idEspecialista }) => {
  const [chamados, setChamados] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);
  const [erro, setErro] = useState('');
  const [novoStatus, setNovoStatus] = useState('');

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

    const fetchChamados = async () => {
      try {
        const codigoEspecialista = localStorage.getItem('codigo');

        if (!codigoEspecialista) {
          setErro('Código do especialista não encontrado. Por favor, faça o login novamente.');
          return;
        }
        const response = await axios.get(`http://localhost:5000/Handlesespecialista/chamados/${codigoEspecialista}`);
        setChamados(response.data);
      } catch (error) {
        console.error('Erro ao buscar chamados:', error);
        setErro('Erro ao carregar os chamados.');
      }
    };

    fetchChamados();
  }, []);

  const handleAlterarStatus = async (numeroChamado, novoStatus) => {
    if (!novoStatus) {
      setErro('Por favor, selecione um novo status.');
      return;
    }

    try {
      console.log('Alterando status para:', novoStatus, 'no chamado:', numeroChamado);
      const response = await axios.put(`http://localhost:5000/api/chamados/${numeroChamado}/status`, {
        codigoStatus_Chamado: novoStatus,
      });
      setChamados(chamados.map((chamado) =>
        chamado.numeroChamado === numeroChamado
          ? { ...chamado, codigoStatus_Chamado: novoStatus }
          : chamado
      ));

      setErro('');
      alert('Status alterado com sucesso!');
    } catch (error) {
      console.error('Erro ao alterar o status do chamado:', error);
      setErro('Erro ao alterar o status do chamado.');
    }
  };

  return (
    <div className="tela-especialista">
      <h2>Chamados do Especialista</h2>
      {erro && <p className="error-message">{erro}</p>}
      <table className="chamados-table">
        <thead>
          <tr>
            <th>Número do Chamado</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Data de Abertura</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map((chamado) => (
            <tr key={chamado.numeroChamado}>
              <td>{chamado.numeroChamado}</td>
              <td>{chamado.tituloChamado}</td>
              <td>{chamado.descricaoChamado}</td>
              <td>{chamado.codigoStatus_Chamado}</td>
              <td>{chamado.dataAbertura}</td>
              <td>
                <select
                  value={chamado.codigoStatus_Chamado || ''}
                  onChange={(e) => handleAlterarStatus(chamado.numeroChamado, e.target.value)}
                  className="status-select"
                >
                  {statusOptions.map((status) => (
                    <option key={status.codigoStatus_Chamado} value={status.codigoStatus_Chamado}>
                      {status.nomeStatus_Chamado}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TelaEspecialista;
