import React, { useState, useEffect } from 'react';
import Estatisticas from '../components/estatisticas/Estatisticas'; 
import Filtros from '../components/filtros/Filtros'; 

import { FaGraduationCap, FaUniversity } from 'react-icons/fa'; 

export default function EnsinoMedio() {
  const [anoFiltro, setAnoFiltro] = useState('');

  const dadosMockEnsinoMedioCompletos = [
    { etapa: 'Ensino Médio', quantidade: 49637, ano: '2024', icone: FaUniversity, tipoCard: 'total' },
    { etapa: '1ª série', quantidade: 17495, ano: '2024', icone: FaGraduationCap },
    { etapa: '2ª série', quantidade: 16333, ano: '2024', icone: FaGraduationCap },
    { etapa: '3ª série', quantidade: 14593, ano: '2024', icone: FaGraduationCap },

    { etapa: 'Ensino Médio', quantidade: 48000, ano: '2023', icone: FaUniversity, tipoCard: 'total' },
    { etapa: '1ª série', quantidade: 17000, ano: '2023', icone: FaGraduationCap },
    { etapa: '2ª série', quantidade: 16000, ano: '2023', icone: FaGraduationCap },
    { etapa: '3ª série', quantidade: 14000, ano: '2023', icone: FaGraduationCap },

    { etapa: 'Ensino Médio', quantidade: 47000, ano: '2022', icone: FaUniversity, tipoCard: 'total' },
    { etapa: '1ª série', quantidade: 16500, ano: '2022', icone: FaGraduationCap },
    { etapa: '2ª série', quantidade: 15500, ano: '2022', icone: FaGraduationCap },
    { etapa: '3ª série', quantidade: 13500, ano: '2022', icone: FaGraduationCap },
  ];

  const handleFiltroChange = (filtrosRecebidos) => {
    setAnoFiltro(filtrosRecebidos.ano);
  };

  const dadosFiltradosPorAno = dadosMockEnsinoMedioCompletos.filter(item => {
    return !anoFiltro || item.ano === anoFiltro;
  });

  const etapasPadrao = [
    'Ensino Médio',
    '1ª série',
    '2ª série',
    '3ª série',
  ];

  const dadosParaExibicaoNosCards = etapasPadrao.map(etapaNome => {
    const itemEncontrado = etapaNome === 'Ensino Médio'
      ? dadosFiltradosPorAno.find(item => item.etapa === etapaNome && item.tipoCard === 'total')
      : dadosFiltradosPorAno.find(item => item.etapa === etapaNome);

    const iconeOriginal = dadosMockEnsinoMedioCompletos.find(item => item.etapa === etapaNome)?.icone || FaGraduationCap;

    return {
      etapa: etapaNome,
      quantidade: itemEncontrado ? itemEncontrado.quantidade : 0,
      icone: iconeOriginal,
      unidade: 'matrículas'
    };
  });

  useEffect(() => {
    handleFiltroChange({ ano: '2024' }); 
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Matrículas de Ensino Médio</h1>

      <h2 style={{ fontSize: '20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        Ensino Médio por Etapa
      </h2>

      <Filtros onChange={handleFiltroChange} />

      <div className="ensino-medio-cards-container">
        {dadosParaExibicaoNosCards.map((dadosCard, index) => (
          <Estatisticas
            key={index}
            dados={[{ categoria: dadosCard.etapa, quantidade: dadosCard.quantidade }]}
            titulo={dadosCard.etapa}
            icone={dadosCard.icone}
          />
        ))}
      </div>
    </div>
  );
}