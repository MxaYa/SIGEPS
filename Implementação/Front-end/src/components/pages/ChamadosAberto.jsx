import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Styles/Chamadoaberto.css';

const ChamadosAbertos = () => {
  const [chamados, setChamados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [chamadoToDelete, setChamadoToDelete] = useState(null);

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

  const excluirChamado = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/chamados/${chamadoToDelete}`);
      setChamados((prevChamados) =>
        prevChamados.filter((chamado) => chamado.numeroChamado !== chamadoToDelete)
      );
      setShowModal(false);
      alert('Chamado excluído com sucesso!');
    } catch (err) {
      console.error('Erro ao excluir chamado:', err);
      alert('Erro ao excluir o chamado.');
      setShowModal(false);
    }
  };

  if (loading) return <div className="loading-spinner">Carregando...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="chamados-container">
      <h1>Chamados Abertos</h1>
      {chamados.length === 0 ? (
        <p className="no-chamados-message">Não há chamados abertos no momento.</p>
      ) : (
        <table className="chamados-table">
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
                    onClick={() => {
                      setChamadoToDelete(chamado.numeroChamado);
                      setShowModal(true);
                    }}
                    className="delete-btn"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal de confirmação */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Tem certeza que deseja excluir este chamado?</h3>
            <div className="modal-actions">
              <button onClick={excluirChamado} className="confirm-btn">
                Confirmar
              </button>
              <button onClick={() => setShowModal(false)} className="cancel-btn">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChamadosAbertos;
