import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChamadosAbertos = () => {
  const [chamados, setChamados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChamadosAbertos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/busca/abertos');
        setChamados(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar chamados:', err);
        setError('Erro ao carregar os chamados');
        setLoading(false);
      }
    };

    fetchChamadosAbertos();
  }, []);

  const excluirChamado = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este chamado?')) {
      try {
        await axios.delete(`http://localhost:5000/api/chamados/${id}`);
        setChamados((prevChamados) =>
          prevChamados.filter((chamado) => chamado.numeroChamado !== id)
        );
        alert('Chamado excluído com sucesso!');
      } catch (err) {
        console.error('Erro ao excluir chamado:', err);
        alert('Erro ao excluir o chamado.');
      }
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Chamados Abertos</h1>
      {chamados.length === 0 ? (
        <p>Não há chamados abertos no momento.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Descrição</th>
              <th>Sistema</th>
              <th>Tipo de Manutenção</th>
              <th>Data de Abertura</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {chamados.map((chamado) => (
              <tr key={chamado.numeroChamado}>
                <td>{chamado.numeroChamado}</td>
                <td>{chamado.descricaoChamado}</td>
                <td>{chamado.sistema?.nomeSistema || 'N/A'}</td>
                <td>{chamado.tipoManutencao?.nomeTipo_Manutencao || 'N/A'}</td>
                <td>
                  {chamado.dataAbertura
                    ? new Date(chamado.dataAbertura).toLocaleDateString('pt-BR')
                    : 'N/A'}
                </td>
                <td>
                  <button
                    onClick={() => excluirChamado(chamado.numeroChamado)}
                    style={{
                      backgroundColor: '#ff4d4f',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      cursor: 'pointer',
                      borderRadius: '5px',
                    }}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ChamadosAbertos;
