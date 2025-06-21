// pages/PreEscola.jsx
import React, { useState, useEffect } from 'react';
import Estatisticas from '../components/estatisticas/Estatisticas';
import Filtros from '../components/filtros/Filtros'; 
import { FaChild, FaBaby } from 'react-icons/fa'; 

export default function PreEscola() {
  const [dadosPreEscolaFiltrados, setDadosPreEscolaFiltrados] = useState([]);
  const [anoFiltro, setAnoFiltro] = useState(''); 

  const dadosMockPreEscolaCompletos = [
    { categoria: 'Pré-escola', quantidade: 25762, unidade: 'matrículas', ano: '2024', icone: FaChild },
    { categoria: 'Pré-escola', quantidade: 25000, unidade: 'matrículas', ano: '2023', icone: FaChild },
    { categoria: 'Pré-escola', quantidade: 24500, unidade: 'matrículas', ano: '2022', icone: FaChild },
    { categoria: 'Pré-escola', quantidade: 24000, unidade: 'matrículas', ano: '2021', icone: FaChild },
    { categoria: 'Pré-escola', quantidade: 23500, unidade: 'matrículas', ano: '2020', icone: FaChild },
  ];

  const handleFiltroChange = (filtrosRecebidos) => {
    console.log('Filtros recebidos em PreEscola.jsx:', filtrosRecebidos);
    setAnoFiltro(filtrosRecebidos.ano); 
  };

  useEffect(() => {
    const resultadoFiltrado = dadosMockPreEscolaCompletos.filter(item => {
      return !anoFiltro || item.ano === anoFiltro;
    });

    const totalMatriculas = resultadoFiltrado.reduce((sum, item) => sum + item.quantidade, 0);
    const iconeParaCard = dadosMockPreEscolaCompletos[0]?.icone || FaChild;

    setDadosPreEscolaFiltrados([
      {
        categoria: 'Pré-escola',
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
      <h1 style={{ fontSize: '2rem', marginBottom: '16px'}}>Matrículas de Pré-escola</h1>

      <Filtros onChange={handleFiltroChange} />
      <Estatisticas
        dados={dadosPreEscolaFiltrados}
        titulo="Pré-escola"
        icone={dadosPreEscolaFiltrados[0]?.icone || FaChild} 
      />
    </div>
  );
}