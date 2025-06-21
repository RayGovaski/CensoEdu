import React, { useState, useEffect } from 'react';
import Estatisticas from '../components/estatisticas/Estatisticas'; 
import Filtros from '../components/filtros/Filtros'; 

import { FaGraduationCap, FaSchool } from 'react-icons/fa';


export default function EnsinoFundamental() {
  const [anoFiltro, setAnoFiltro] = useState('');

  const dadosMockEnsinoFundamentalCompletos = [
    { etapa: 'Anos finais', quantidade: 65958, ano: '2024', icone: FaSchool, tipoCard: 'total' },
    { etapa: '6º ano', quantidade: 15815, ano: '2024', icone: FaGraduationCap },
    { etapa: '7º ano', quantidade: 16760, ano: '2024', icone: FaGraduationCap },
    { etapa: '8º ano', quantidade: 16874, ano: '2024', icone: FaGraduationCap },
    { etapa: '9º ano', quantidade: 16509, ano: '2024', icone: FaGraduationCap },

    { etapa: 'Anos finais', quantidade: 64000, ano: '2023', icone: FaSchool, tipoCard: 'total' },
    { etapa: '6º ano', quantidade: 15500, ano: '2023', icone: FaGraduationCap },
    { etapa: '7º ano', quantidade: 16500, ano: '2023', icone: FaGraduationCap },
    { etapa: '8º ano', quantidade: 16600, ano: '2023', icone: FaGraduationCap },
    { etapa: '9º ano', quantidade: 16300, ano: '2023', icone: FaGraduationCap },

    { etapa: 'Anos finais', quantidade: 62000, ano: '2022', icone: FaSchool, tipoCard: 'total' },
    { etapa: '6º ano', quantidade: 15000, ano: '2022', icone: FaGraduationCap },
    { etapa: '7º ano', quantidade: 16000, ano: '2022', icone: FaGraduationCap },
    { etapa: '8º ano', quantidade: 16200, ano: '2022', icone: FaGraduationCap },
    { etapa: '9º ano', quantidade: 15800, ano: '2022', icone: FaGraduationCap },
  ];

  const handleFiltroChange = (filtrosRecebidos) => {
    setAnoFiltro(filtrosRecebidos.ano);
  };

  const dadosFiltradosPorAno = dadosMockEnsinoFundamentalCompletos.filter(item => {
    return !anoFiltro || item.ano === anoFiltro;
  });


  const etapasPadrao = [
    'Anos finais',
    '6º ano',
    '7º ano',
    '8º ano',
    '9º ano',
  ];

  const dadosParaExibicaoNosCards = etapasPadrao.map(etapaNome => {
    const itemEncontrado = etapaNome === 'Anos finais'
      ? dadosFiltradosPorAno.find(item => item.etapa === etapaNome && item.tipoCard === 'total')
      : dadosFiltradosPorAno.find(item => item.etapa === etapaNome);

    const iconeOriginal = dadosMockEnsinoFundamentalCompletos.find(item => item.etapa === etapaNome)?.icone || FaSchool;

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
      <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Matrículas de Ensino Fundamental</h1>

      <h2 style={{ fontSize: '20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        Ensino Fundamental por Etapa
      </h2>

      <Filtros onChange={handleFiltroChange} />

      <div className="ensino-fundamental-cards-container">
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