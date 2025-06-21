import './Estatisticas.css';
import { createElement } from 'react';

export default function Estatisticas({ dados, titulo, icone: IconeComponent }) {
  const totalEscolas = dados.reduce((sum, item) => sum + item.quantidade, 0);

  return (
    <div className="estatisticas">

      <div className="estatisticas-grid">
        {dados.length === 0 ? (
          <p className="estatisticas-vazio">Nenhum resultado com os filtros aplicados.</p>
        ) : (
          <div className="estatisticas-card">
            {IconeComponent && createElement(IconeComponent, { className: "estatisticas-icone" })}
            <p className="estatisticas-categoria">{titulo}</p>
            <p className="estatisticas-valor">{totalEscolas.toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}