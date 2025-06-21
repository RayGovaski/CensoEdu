// Escolas.jsx
import { useState, useEffect } from 'react';
import { FaSchool } from 'react-icons/fa';
import Filtros from '../components/filtros/Filtros';
import Estatisticas from '../components/estatisticas/Estatisticas';

export default function Escolas() {
  const [dadosFiltrados, setDadosFiltrados] = useState([]);

  const dadosMock = [
    {
      ano: '2024',
      categoria: 'Pública Urbana',
      nivelAdministrativo: 'Estadual',
      localizacao: 'Urbana',
      niveisEducacionais: ['Com Ensino Infantil Regular', 'Com Ensino Fundamental Regular'],
      quantidade: 120,
    },
    {
      ano: '2024',
      categoria: 'Privada Urbana',
      nivelAdministrativo: 'Privada',
      localizacao: 'Urbana',
      niveisEducacionais: ['Com Ensino Fundamental Regular', 'Com Ensino Médio Regular'],
      quantidade: 60,
    },
    {
      ano: '2023',
      categoria: 'Pública Rural',
      nivelAdministrativo: 'Municipal',
      localizacao: 'Rural',
      niveisEducacionais: ['Com Ensino Fundamental Regular', 'Com Educação Especial Substitutiva'],
      quantidade: 90,
    },
    {
      ano: '2023',
      categoria: 'Privada Urbana',
      nivelAdministrativo: 'Privada',
      localizacao: 'Urbana',
      niveisEducacionais: ['Com Ensino Infantil Regular'],
      quantidade: 45,
    },
    {
      ano: '2022',
      categoria: 'Pública Urbana',
      nivelAdministrativo: 'Federal',
      localizacao: 'Urbana',
      niveisEducacionais: ['Com Ensino Médio Regular', 'Educação em Tempo Integral'],
      quantidade: 150,
    },
    {
      ano: '2024',
      categoria: 'Pública Rural',
      nivelAdministrativo: 'Municipal',
      localizacao: 'Rural',
      niveisEducacionais: ['Com Educação de Jovens e Adultos'],
      quantidade: 80,
    },
    {
      ano: '2023',
      categoria: 'Privada Rural',
      nivelAdministrativo: 'Privada',
      localizacao: 'Rural',
      niveisEducacionais: ['Com Ensino Fundamental Regular', 'Educação em Tempo Integral'],
      quantidade: 30,
    },
  ];

  const handleFiltro = (filtros) => {
    console.log('Filtros recebidos em handleFiltro:', filtros);

    const resultado = dadosMock.filter((item) => {
      const filterAno = filtros.ano ? filtros.ano.toLowerCase() : '';
      const filterTipo = filtros.tipo ? filtros.tipo.toLowerCase() : '';
      const filterLocalizacao = filtros.localizacao ? filtros.localizacao.toLowerCase() : '';
      const filterCategoria = filtros.categoria ? filtros.categoria.toLowerCase() : '';

      const correspondeAno = !filterAno || item.ano.toLowerCase() === filterAno;
      const correspondeLocalizacao = !filterLocalizacao || item.localizacao.toLowerCase() === filterLocalizacao;

      let correspondeTipo = true;
      if (filterTipo) {
        if (filterTipo === 'pública') {
          correspondeTipo = ['municipal', 'estadual', 'federal'].includes(item.nivelAdministrativo.toLowerCase());
        } else {
          correspondeTipo = item.nivelAdministrativo.toLowerCase() === filterTipo;
        }
      }

      const correspondeCategoria = !filterCategoria || item.niveisEducacionais.some(nivel =>
        nivel.toLowerCase().includes(filterCategoria)
      );

      console.log(`  Item: ${item.categoria} (Nível Adm: ${item.nivelAdministrativo})`);
      console.log(`  Match - Ano: ${correspondeAno}, Tipo: ${correspondeTipo}, Localizacao: ${correspondeLocalizacao}, Categoria: ${correspondeCategoria}`);

      return correspondeAno && correspondeTipo && correspondeLocalizacao && correspondeCategoria;
    });

    console.log('Dados filtrados resultantes (resultado do filter):', resultado);
    setDadosFiltrados(resultado);
  };

  useEffect(() => {
    handleFiltro({ ano: '', tipo: '', localizacao: '', categoria: '' });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Escolas</h1>
      <Filtros onChange={handleFiltro} />
      <Estatisticas
        dados={dadosFiltrados}
        titulo="Escolas"
        icone={FaSchool}
      />
    </div>
  );
}