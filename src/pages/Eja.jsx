import React, { useState, useEffect } from 'react';
import Estatisticas from '../components/estatisticas/Estatisticas';
import Filtros from '../components/filtros/Filtros'; 
import { RiGraduationCapFill } from 'react-icons/ri'; 

export default function Eja() {
  const [dadosEjaFiltrados, setDadosEjaFiltrados] = useState([]);
  const [anoFiltro, setAnoFiltro] = useState(''); 

  const dadosMockEjaCompletos = [
    { categoria: 'EJA', quantidade: 8500, unidade: 'matrículas', ano: '2024', icone: RiGraduationCapFill },
    { categoria: 'EJA', quantidade: 8200, unidade: 'matrículas', ano: '2023', icone: RiGraduationCapFill },
    { categoria: 'EJA', quantidade: 8000, unidade: 'matrículas', ano: '2022', icone: RiGraduationCapFill },
    { categoria: 'EJA', quantidade: 7800, unidade: 'matrículas', ano: '2021', icone: RiGraduationCapFill },
    { categoria: 'EJA', quantidade: 7500, unidade: 'matrículas', ano: '2020', icone: RiGraduationCapFill },
  ];

  const handleFiltroChange = (filtrosRecebidos) => {
    console.log('Filtros recebidos em Eja.jsx:', filtrosRecebidos);
    setAnoFiltro(filtrosRecebidos.ano);
  };

  useEffect(() => {
    const resultadoFiltrado = dadosMockEjaCompletos.filter(item => {
      return !anoFiltro || item.ano === anoFiltro;
    });

    const totalMatriculas = resultadoFiltrado.reduce((sum, item) => sum + item.quantidade, 0);

    const iconeParaCard = dadosMockEjaCompletos[0]?.icone || RiGraduationCapFill;

    setDadosEjaFiltrados([
      {
        categoria: 'EJA',
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
      <h1 style={{ fontSize: '2rem', marginBottom: '16px'}}>Matrículas de EJA</h1>

      <Filtros onChange={handleFiltroChange} />
      <Estatisticas
        dados={dadosEjaFiltrados}
        titulo="EJA" 
        icone={dadosEjaFiltrados[0]?.icone || RiGraduationCapFill}
      />
    </div>
  );
}