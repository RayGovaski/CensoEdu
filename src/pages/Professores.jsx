// pages/Professores.jsx
import React, { useState, useEffect } from 'react';
import Estatisticas from '../components/estatisticas/Estatisticas';
import Filtros from '../components/filtros/Filtros';

import { FaLaptopHouse, FaBookReader, FaGraduationCap, FaUserGraduate } from 'react-icons/fa';


export default function Professores() {
  const dadosMockProfessoresCompletos = [
    { etapa: 'Anos iniciais', quantidade: 4963, ano: '2024', icone: FaLaptopHouse },
    { etapa: 'Anos finais', quantidade: 4226, ano: '2024', icone: FaBookReader },
    { etapa: 'Ensino Médio', quantidade: 3506, ano: '2024', icone: FaGraduationCap },

    { etapa: 'Anos iniciais', quantidade: 4800, ano: '2023', icone: FaLaptopHouse },
    { etapa: 'Anos finais', quantidade: 4100, ano: '2023', icone: FaBookReader },
    { etapa: 'Ensino Médio', quantidade: 3400, ano: '2023', icone: FaGraduationCap },

    { etapa: 'Anos iniciais', quantidade: 4700, ano: '2022', icone: FaLaptopHouse },
    { etapa: 'Anos finais', quantidade: 4000, ano: '2022', icone: FaBookReader },
    { etapa: 'Ensino Médio', quantidade: 3300, ano: '2022', icone: FaGraduationCap },
  ];
  const [anoFiltro, setAnoFiltro] = useState('');

  const handleFiltroChange = (filtrosRecebidos) => {
    console.log('Filtros recebidos do Filtros.jsx:', filtrosRecebidos);
    setAnoFiltro(filtrosRecebidos.ano); 
  };

  const dadosFiltradosPorAno = dadosMockProfessoresCompletos.filter(item => {
    return !anoFiltro || item.ano === anoFiltro;
  });

  const etapasPadrao = ['Anos iniciais', 'Anos finais', 'Ensino Médio'];
  const dadosParaExibicaoNosCards = etapasPadrao.map(etapaNome => {
    const itemParaEtapa = dadosFiltradosPorAno.find(item => item.etapa === etapaNome);
    const iconeOriginal = dadosMockProfessoresCompletos.find(item => item.etapa === etapaNome)?.icone || FaUserGraduate;

    return {
      etapa: etapaNome,
      quantidade: itemParaEtapa ? itemParaEtapa.quantidade : 0,
      icone: iconeOriginal, 
      unidade: 'professores'
    };
  });

  useEffect(() => {
    handleFiltroChange({ ano: '2024' }); 
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Professores</h1>

      <h2 style={{ fontSize: '20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        Professores por etapa
      </h2>
      <Filtros onChange={handleFiltroChange} />
      <div className="professores-cards-container">
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