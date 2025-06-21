// pages/EducacaoInfantil.jsx
import React, { useState, useEffect } from 'react';
import Estatisticas from '../components/estatisticas/Estatisticas';
import Filtros from '../components/filtros/Filtros'; 

import { FaChild, FaGraduationCap } from 'react-icons/fa';


export default function EducacaoInfantil() {
  const dadosMockEducacaoInfantilCompletos = [
    { etapa: 'Anos iniciais', quantidade: 70175, ano: '2024', icone: FaChild, tipoCard: 'total' },
    { etapa: '1º ano', quantidade: 16375, ano: '2024', icone: FaChild },
    { etapa: '2º ano', quantidade: 14966, ano: '2024', icone: FaChild },
    { etapa: '3º ano', quantidade: 15419, ano: '2024', icone: FaChild },
    { etapa: '4º ano', quantidade: 8792, ano: '2024', icone: FaChild },
    { etapa: '5º ano', quantidade: 14623, ano: '2024', icone: FaChild },

    { etapa: 'Anos iniciais', quantidade: 68000, ano: '2023', icone: FaChild, tipoCard: 'total' },
    { etapa: '1º ano', quantidade: 16000, ano: '2023', icone: FaChild },
    { etapa: '2º ano', quantidade: 14500, ano: '2023', icone: FaChild },
    { etapa: '3º ano', quantidade: 15000, ano: '2023', icone: FaChild },
    { etapa: '4º ano', quantidade: 8500, ano: '2023', icone: FaChild },
    { etapa: '5º ano', quantidade: 14000, ano: '2023', icone: FaChild },

    { etapa: 'Anos iniciais', quantidade: 65000, ano: '2022', icone: FaChild, tipoCard: 'total' },
    { etapa: '1º ano', quantidade: 15500, ano: '2022', icone: FaChild },
    { etapa: '2º ano', quantidade: 14000, ano: '2022', icone: FaChild },
    { etapa: '3º ano', quantidade: 14500, ano: '2022', icone: FaChild },
    { etapa: '4º ano', quantidade: 8000, ano: '2022', icone: FaChild },
    { etapa: '5º ano', quantidade: 13500, ano: '2022', icone: FaChild },
  ];

  const [anoFiltro, setAnoFiltro] = useState('');

  const handleFiltroChange = (filtrosRecebidos) => {
    console.log('Filtros recebidos em EducacaoInfantil.jsx:', filtrosRecebidos);
    setAnoFiltro(filtrosRecebidos.ano);
  };

  const dadosFiltradosPorAno = dadosMockEducacaoInfantilCompletos.filter(item => {
    return !anoFiltro || item.ano === anoFiltro;
  });

  const etapasPadrao = [
    'Anos iniciais',
    '1º ano',
    '2º ano',
    '3º ano',
    '4º ano',
    '5º ano',
  ];

  const dadosParaExibicaoNosCards = etapasPadrao.map(etapaNome => {
    const itemEncontrado = etapaNome === 'Anos iniciais'
      ? dadosFiltradosPorAno.find(item => item.etapa === etapaNome && item.tipoCard === 'total')
      : dadosFiltradosPorAno.find(item => item.etapa === etapaNome);

    const iconeOriginal = dadosMockEducacaoInfantilCompletos.find(item => item.etapa === etapaNome)?.icone || FaChild;

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

      <h1 style={{ fontSize: '2rem', marginBottom: '16px'}}>Matrículas de Educação Infantil</h1>

      <h2 style={{ fontSize: '20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        Educação Infantil por Etapa
      </h2>

      <Filtros onChange={handleFiltroChange} />

      <div className="educacao-infantil-cards-container">
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