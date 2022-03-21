import React from 'react';

import './style/NavTabs.css';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={{display: 'flex', flexDirection: 'row', marginTop: '25px', marginBottom: '25px', alignItems: 'center', justifyContent: 'center'}}>
      <li className="nav-item">
        <a
          style={{color: 'orange'}}
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{color: 'orange'}}
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{color: 'orange'}}
          href="#blog"
          onClick={() => handlePageChange('Blog')}

          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{color: 'orange'}}
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>

      <li className="nav-item">
        <a
          style={{color: 'orange'}}
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
