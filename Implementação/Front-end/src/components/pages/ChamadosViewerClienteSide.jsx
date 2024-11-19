import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles/ChamadosViewerClienteSide.css';

const MeusChamados = () => {
  const [chamados, setChamados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [codigoCliente, setCodigoCliente] = useState(null);

  useEffect(() => {
    const storedCodigoCliente = localStorage.getItem('codigo');
    console.log('Código Cliente do LocalStorage:', storedCodigoCliente);  // Verifique o valor

    setCodigoCliente(storedCodigoCliente);

    const fetchChamados = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/chamados');

        console.log('Chamados recebidos do backend:', response.data);

        const filteredChamados = response.data.filter(chamado => Number(chamado.codigoCliente) === Number(storedCodigoCliente));
        console.log('Chamados filtrados:', filteredChamados);

        setChamados(filteredChamados);
        setLoading(false);
      } catch (error) {
        setError('Erro ao carregar chamados');
        setLoading(false);
      }
    };

    fetchChamados();
  }, []);

  if (loading) {
    return <p>Carregando chamados...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="chamados-container">
      <h2>Meus Chamados</h2>
      <table className="chamados-table">
        <thead>
          <tr>
            <th>Número Chamado</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Data Abertura</th>
            <th>Data Fechamento</th>
            <th>Sistema</th>
            <th>Tipo de Manutenção</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map((chamado) => (
            <tr key={chamado.numeroChamado}>
              <td>{chamado.numeroChamado}</td>
              <td>{chamado.tituloChamado}</td>
              <td>{chamado.descricaoChamado}</td>
              <td>{chamado.codigoStatus_Chamado}</td>
              <td>{new Date(chamado.dataAbertura).toLocaleDateString()}</td>
              <td>{chamado.dataFechamento ? new Date(chamado.dataFechamento).toLocaleDateString() : 'Ainda em aberto'}</td>
              <td>{chamado.codigoSistema}</td>
              <td>{chamado.codigoTipo_Manutencao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeusChamados;
