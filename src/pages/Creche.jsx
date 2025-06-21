import React, { useState, useEffect } from 'react';

import Estatisticas from '../components/estatisticas/Estatisticas';
import Filtros from '../components/filtros/Filtros';

import { FaChild } from 'react-icons/fa';

export default function Creche() {
  const [dadosCrecheFiltrados, setDadosCrecheFiltrados] = useState([]);
  const [anoFiltro, setAnoFiltro] = useState('');

  const dadosMockCrecheCompletos = [
    { categoria: 'Creche', quantidade: 16971, unidade: 'matrículas', ano: '2024', icone: FaChild },
    { categoria: 'Creche', quantidade: 16500, unidade: 'matrículas', ano: '2023', icone: FaChild },
    { categoria: 'Creche', quantidade: 16000, unidade: 'matrículas', ano: '2022', icone: FaChild },
    // Adicione mais anos conforme a lista do seu Filtros.jsx
    { categoria: 'Creche', quantidade: 15500, unidade: 'matrículas', ano: '2021', icone: FaChild },
    { categoria: 'Creche', quantidade: 15000, unidade: 'matrículas', ano: '2020', icone: FaChild },
  ];

  const handleFiltroChange = (filtrosRecebidos) => {
    console.log('Filtros recebidos em Creche.jsx:', filtrosRecebidos);
    setAnoFiltro(filtrosRecebidos.ano);
  };

  useEffect(() => {
    const resultadoFiltrado = dadosMockCrecheCompletos.filter(item => {
      return !anoFiltro || item.ano === anoFiltro;
    });

    const totalMatriculas = resultadoFiltrado.reduce((sum, item) => sum + item.quantidade, 0);
    const iconeParaCard = dadosMockCrecheCompletos[0]?.icone || FaChild;

    setDadosCrecheFiltrados([
      {
        categoria: 'Creche',
        quantidade: totalMatriculas,
        unidade: 'matrículas',
        icone: iconeParaCard, 
      }
    ]);
  }, [anoFiltro]); 

  useEffect(() => {
    handleFiltroChange({ ano: '2024' });
  }, []); 


  return (
    <div style={{ padding: '20px' }}>
      {/* Título da página */}
      <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Matrículas de Creche</h1>

      <Filtros onChange={handleFiltroChange} />

      <Estatisticas
        dados={dadosCrecheFiltrados} 
        titulo="Creche" 
        icone={dadosCrecheFiltrados[0]?.icone || FaChild} 
      />
    </div>
  );
}