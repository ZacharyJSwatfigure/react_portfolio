import React from 'react';

import './style/NavTabs.css';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={{display: 'flex', flexDirection: 'row', marginTop: '25px', marginBottom: '25px', alignItems: 'center', justifyContent: 'center'}}>
      <li className="nav-item">
        <a
          style={{color: 'black'}}
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{color: 'black'}}
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{color: 'black'}}
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Resumé
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{color: 'black'}}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>

      <li className="nav-item">
        <a
          style={{color: 'black'}}
          href="#myProjects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          My Projects
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
