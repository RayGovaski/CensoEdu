import React, { useState, useEffect, useRef } from 'react';
import './Filtros.css';

import { FaChevronDown } from 'react-icons/fa';

const CustomSelect = ({ name, value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false); 
  };

  const selectedLabel = options.find(option => option.value === value)?.label || '';

  return (
    <div className="custom-select-wrapper" ref={selectRef}>
      <div
        className={`custom-select-trigger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="selected-value">{selectedLabel || 'Selecione'}</span>
        <FaChevronDown className={`custom-select-arrow ${isOpen ? 'rotate' : ''}`} />
      </div>
      {isOpen && (
        <div className="custom-options">
          {options.map((option) => (
            <div
              key={option.value === '' ? `todos-${name}` : option.value}
              className={`custom-option ${option.value === value ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Filtros = ({ onChange }) => {
  const [filtros, setFiltros] = useState({
    ano: '',
    tipo: '',
    localizacao: '',
    categoria: '',
  });

  const opcoes = {
    ano: [
      { value: '', label: 'Todos os Anos' },
      { value: '2024', label: '2024' },
      { value: '2023', label: '2023' },
      { value: '2022', label: '2022' },
      { value: '2021', label: '2021' },
      { value: '2020', label: '2020' },
      { value: '2019', label: '2019' },
      { value: '2018', label: '2018' },
      { value: '2017', label: '2017' },
      { value: '2016', label: '2016' },
      { value: '2015', label: '2015' },
      { value: '2014', label: '2014' },
      { value: '2013', label: '2013' },
      { value: '2012', label: '2012' },
      { value: '2011', label: '2011' },
      { value: '2010', label: '2010' },
    ],
    tipo: [
      { value: '', label: 'Todos os Tipos' },
      { value: 'Pública', label: 'Pública' },
      { value: 'Municipal', label: 'Municipal' },
      { value: 'Estadual', label: 'Estadual' },
      { value: 'Federal', label: 'Federal' },
      { value: 'Privada', label: 'Privada' },
    ],
    localizacao: [
      { value: '', label: 'Todas as Localizações' },
      { value: 'Urbana', label: 'Urbana' },
      { value: 'Rural', label: 'Rural' },
    ],
    categoria: [
      { value: '', label: 'Todas as Escolas' },
      { value: 'Com Ensino Infantil Regular', label: 'Com Ensino Infantil Regular' },
      { value: 'Com Ensino Fundamental Regular', label: 'Com Ensino Fundamental Regular' },
      { value: 'Com Ensino Médio Regular', label: 'Com Ensino Médio Regular' },
      { value: 'Com Educação Especial Substitutiva', label: 'Com Educação Especial Substitutiva' },
      { value: 'Com Educação de Jovens e Adultos', label: 'Com Educação de Jovens e Adultos' },
      { value: 'Educação em Tempo Integral', label: 'Educação em Tempo Integral' },
    ],
  };

  const handleChange = (key, value) => {
    const novosFiltros = { ...filtros, [key]: value };
    setFiltros(novosFiltros);
    onChange?.(novosFiltros);
  };

  return (
    <div className="filtros-container">
      <CustomSelect
        name="ano"
        value={filtros.ano}
        options={opcoes.ano}
        onChange={(value) => handleChange('ano', value)}
      />
      <CustomSelect
        name="tipo"
        value={filtros.tipo}
        options={opcoes.tipo}
        onChange={(value) => handleChange('tipo', value)}
      />
      <CustomSelect
        name="localizacao"
        value={filtros.localizacao}
        options={opcoes.localizacao}
        onChange={(value) => handleChange('localizacao', value)}
      />
      <CustomSelect
        name="categoria"
        value={filtros.categoria}
        options={opcoes.categoria}
        onChange={(value) => handleChange('categoria', value)}
      />
    </div>
  );
};

export default Filtros;