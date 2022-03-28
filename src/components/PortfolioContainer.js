import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import '../components/style/Header.css';
import mePic from './images/meSmaller.jpg';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <section>
        <div className="picAndName">
          <img className = "mePic" src = {mePic}/>
          <div>
            <h1 className="hello">
              Hello!
            </h1>
          </div>
        </div>
        <div className="titleMe">Zachary's Portfolio</div>
      </section>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
