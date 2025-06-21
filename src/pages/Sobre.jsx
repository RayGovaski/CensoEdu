import React from 'react';
import './Sobre.css'; 

export default function Sobre() {
  return (
    <div className="sobre-container">
      <h1 className="sobre-titulo-principal">
        Sobre o Sistema de Matrículas Escolares
      </h1>

      <p className="sobre-paragrafo">
        Bem-vindo ao <strong className="sobre-destaque">Sistema de Matrículas Escolares</strong>! Esta plataforma foi desenvolvida para fornecer uma visão clara e abrangente dos dados educacionais em nossa rede de ensino. Nosso objetivo é transformar dados complexos em informações acessíveis e compreensíveis para gestores, educadores e a comunidade.
      </p>

      <h2 className="sobre-subtitulo">
        O que o Sistema Faz?
      </h2>

      <p className="sobre-paragrafo">
        Nosso sistema centraliza e organiza informações cruciais sobre:
      </p>

      <ul className="sobre-lista">
        <li>
          <strong className="sobre-destaque">Matrículas por Etapa de Ensino:</strong> Tenha acesso rápido ao número de matrículas em Creche, Pré-escola, Educação Infantil (1º ao 5º ano), Ensino Fundamental (6º ao 9º ano), Ensino Médio, EJA (Educação de Jovens e Adultos) e Educação Especial.
        </li>
        <li>
          <strong className="sobre-destaque">Dados de Escolas:</strong> Explore estatísticas detalhadas sobre as escolas da rede, incluindo categorização por tipo (pública/privada), nível administrativo (municipal, estadual, federal) e localização (urbana/rural).
        </li>
        <li>
          <strong className="sobre-destaque">Estatísticas de Professores:</strong> Visualize o quantitativo de professores distribuídos por etapas de ensino, oferecendo um panorama da força de trabalho educacional.
        </li>
        <li>
          <strong className="sobre-destaque">Filtros Dinâmicos:</strong> Utilize filtros por ano para analisar a evolução e o comparativo dos dados ao longo do tempo.
        </li>
      </ul>

      <p className="sobre-paragrafo sobre-contato">
        Com esta ferramenta, esperamos apoiar a <strong className="sobre-destaque">tomada de decisões baseada em dados</strong>, identificar tendências e otimizar recursos para uma educação cada vez melhor. Se tiver dúvidas ou sugestões, entre em contato!
      </p>
    </div>
  );
}