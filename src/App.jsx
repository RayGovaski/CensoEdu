import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './pages/SideBar.jsx';
import Escolas from './pages/Escola';
import Professores from './pages/Professores';
import Creche from './pages/Creche';
import Eja from './pages/Eja';
import EducacaoEspecial from './pages/EducacaoEspecial';
import PreEscola from './pages/PreEscola';
import EnsinoFundamental from './pages/EnsinoFundamental';
import EnsinoMedio from './pages/EnsinoMedio';
import Sobre from './pages/Sobre';
import EducacaoInfantil from './pages/EducacaoInfantil';

import './App.css';
import './theme.css';

import { ThemeProvider } from './pages/ThemeContext.jsx';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Sobre />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/escolas" element={<Escolas />} />
              <Route path="/professores" element={<Professores />} />
              <Route path="/matriculas/creche" element={<Creche />} />
              <Route path="/matriculas/educacao-infantil" element={<EducacaoInfantil />} />
              <Route path="/matriculas/ensino-fundamental" element={<EnsinoFundamental />} />
              <Route path="/matriculas/ensino-medio" element={<EnsinoMedio />} />
              <Route path="/matriculas/eja" element={<Eja />} />
              <Route path="/matriculas/educacao-especial" element={<EducacaoEspecial />} />
              <Route path="/matriculas/pre-escola" element={<PreEscola />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;