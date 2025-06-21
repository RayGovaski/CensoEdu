import React, { useState, useEffect } from 'react';
import Estatisticas from '../components/estatisticas/Estatisticas';
import Filtros from '../components/filtros/Filtros'; 
import { FaWheelchair } from 'react-icons/fa';

export default function EducacaoEspecial() {
  const [dadosEducacaoEspecialFiltrados, setDadosEducacaoEspecialFiltrados] = useState([]);
  const [anoFiltro, setAnoFiltro] = useState(''); 

  const dadosMockEducacaoEspecialCompletos = [
    { categoria: 'Educação Especial', quantidade: 15453, unidade: 'matrículas', ano: '2024', icone: FaWheelchair },
    { categoria: 'Educação Especial', quantidade: 15000, unidade: 'matrículas', ano: '2023', icone: FaWheelchair },
    { categoria: 'Educação Especial', quantidade: 14800, unidade: 'matrículas', ano: '2022', icone: FaWheelchair },
    { categoria: 'Educação Especial', quantidade: 14500, unidade: 'matrículas', ano: '2021', icone: FaWheelchair },
    { categoria: 'Educação Especial', quantidade: 14000, unidade: 'matrículas', ano: '2020', icone: FaWheelchair },
  ];

  const handleFiltroChange = (filtrosRecebidos) => {
    console.log('Filtros recebidos em EducacaoEspecial.jsx:', filtrosRecebidos);
    setAnoFiltro(filtrosRecebidos.ano);
  };

  useEffect(() => {
    const resultadoFiltrado = dadosMockEducacaoEspecialCompletos.filter(item => {
      return !anoFiltro || item.ano === anoFiltro;
    });

    const totalMatriculas = resultadoFiltrado.reduce((sum, item) => sum + item.quantidade, 0);

    const iconeParaCard = dadosMockEducacaoEspecialCompletos[0]?.icone || FaWheelchair;

    setDadosEducacaoEspecialFiltrados([
      {
        categoria: 'Educação Especial',
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
      <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Matrículas de Educação Especial</h1>

      {/* Adiciona o componente de Filtros existente */}
      <Filtros onChange={handleFiltroChange} />

      {/* Reutiliza o componente Estatisticas para exibir o card único de Educação Especial */}
      <Estatisticas
        dados={dadosEducacaoEspecialFiltrados}
        titulo="Educação Especial" 
        icone={dadosEducacaoEspecialFiltrados[0]?.icone || FaWheelchair}
      />
    </div>
  );
}