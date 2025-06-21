// src/components/sidebar/Sidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineFindInPage, MdAppRegistration } from 'react-icons/md';
import { FaSchool, FaChalkboardTeacher, FaWheelchair, FaChevronDown, FaChevronRight, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { RiGraduationCapFill } from 'react-icons/ri';

import './Sidebar.css';

import { useTheme } from '../../context/ThemeContext'; // Importa o hook useTheme

const Sidebar = () => {
  const [isMatriculasOpen, setIsMatriculasOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { theme, toggleTheme } = useTheme(); // Usa o hook para acessar o tema

  const menuItems = [
    { icon: MdOutlineFindInPage, label: 'Sobre', href: '/sobre' },
    { icon: FaSchool, label: 'Escolas', href: '/escolas' },
    { icon: FaChalkboardTeacher, label: 'Professores', href: '/professores' },
    {
      icon: MdAppRegistration,
      label: 'Matrículas',
      href: '/matriculas',
      hasSubmenu: true,
      isOpen: isMatriculasOpen,
      onClick: () => setIsMatriculasOpen(!isMatriculasOpen),
      submenus: [
        { label: 'Creche', href: '/matriculas/creche' },
        { label: 'Pré-escola', href: '/matriculas/pre-escola' },
        { label: 'Educação Infantil', href: '/matriculas/educacao-infantil' },
        { label: 'Ensino Fundamental', href: '/matriculas/ensino-fundamental' },
        { label: 'Ensino Médio', href: '/matriculas/ensino-medio' },
        { label: 'EJA', href: '/matriculas/eja' },
        { label: 'Educação Especial', href: '/matriculas/educacao-especial' }
      ]
    }
  ];

  const handleMenuClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    if (!item.hasSubmenu) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleSubmenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveRoute = (href) => {
    return location.pathname === href;
  };

  return (
    <>
      <div className="navbar-mobile lg:hidden">
        <div className="navbar-mobile-content">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="menu-toggle-button"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="menu-icon" />
            ) : (
              <FaBars className="menu-icon" />
            )}
          </button>
          <Link to="/">
            <div className="logo-image" aria-label="Logo do Sistema"></div>
          </Link>
          {/* Botão de alternar tema para navbar mobile */}
          <button onClick={toggleTheme} className="theme-toggle-button" aria-label="Toggle theme">
            {theme === 'light' ? (
              <FaMoon className="theme-icon" />
            ) : (
              <FaSun className="theme-icon" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-dropdown-menu animate-slide-in-top">
            <nav className="mobile-nav-list">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.hasSubmenu ? (
                    <button
                      onClick={() => handleMenuClick(item)}
                      className="menu-item-button"
                    >
                      <div className="icon-label-wrapper">
                        <item.icon className="item-icon" />
                        <span className="item-label">
                          {item.label}
                        </span>
                      </div>
                      <div className="chevron-icon-wrapper">
                        {item.isOpen ? (
                          <FaChevronDown className="chevron-icon" />
                        ) : (
                          <FaChevronRight className="chevron-icon" />
                        )}
                      </div>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => handleMenuClick(item)}
                      className={`menu-item-link ${isActiveRoute(item.href) ? 'active' : ''}`}
                    >
                      <item.icon className="item-icon" />
                      <span className="item-label">
                        {item.label}
                      </span>
                    </Link>
                  )}

                  {item.hasSubmenu && item.isOpen && (
                    <div className="submenu-container animate-slide-in-top-small" style={{ marginBottom: '50px' }}>
                      {item.submenus.map((submenu, idx) => (
                        <Link
                          key={idx}
                          to={submenu.href}
                          onClick={handleSubmenuClick}
                          className="submenu-link"
                        >
                          {submenu.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Sidebar Desktop */}
      <div className="sidebar-desktop">
        <div className="sidebar-header">
          <Link to="/" className="logo-wrapper">
            <div className="logo-image" aria-label="Logo do Sistema"></div>
          </Link>
          {/* Botão de alternar tema para sidebar desktop */}
          <button onClick={toggleTheme} className="theme-toggle-button-desktop" aria-label="Toggle theme">
            {theme === 'light' ? (
              <FaMoon className="theme-icon-desktop" />
            ) : (
              <FaSun className="theme-icon-desktop" />
            )}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.hasSubmenu ? (
                <button
                  onClick={() => handleMenuClick(item)}
                  className="menu-item-button"
                >
                  <div className="icon-label-wrapper">
                    <item.icon className="item-icon" />
                    <span className="item-label">
                      {item.label}
                    </span>
                  </div>
                  <div className="chevron-icon-wrapper">
                    {item.isOpen ? (
                      <FaChevronDown className="chevron-icon" />
                    ) : (
                      <FaChevronRight className="chevron-icon" />
                    )}
                  </div>
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`menu-item-link ${isActiveRoute(item.href) ? 'active' : ''}`}
                >
                  <item.icon className="item-icon" />
                  <span className="item-label">
                    {item.label}
                  </span>
                </Link>
              )}

              {item.hasSubmenu && item.isOpen && (
                <div className="submenu-container animate-slide-in-top-small" style={{ marginBottom: '100px' }}>
                  {item.submenus.map((submenu, idx) => (
                    <Link
                      key={idx}
                      to={submenu.href}
                      className="submenu-link"
                    >
                      {submenu.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;