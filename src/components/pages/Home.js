import React from 'react';
import '../style/Home.css';
import octoswat from '../images/octoswat.jpg';
import weouthere from '../images/weouthere.jpg';


export default function Home() {
  return (
    <section>
      <div className="homeContainer">
        <div className="welcomeBox">
          <h1 className="title">Welcome</h1>
        </div>
        <div className='aboutHome blurb'>
          <p className='blurb'>
            This page is intended to showcase my projects, and give employers a brief background about who I am.
          </p>
        </div>
      </div>
      <div className = 'pictureContainer'>
        <div className='bioPictureBox'>
          <img className='imgSmallMe' src={octoswat} alt='octoswat'></img>
          <img className='imgLargeMe' src={weouthere} alt='marine'></img>
        </div>
      </div>
    </section>

  );
}
