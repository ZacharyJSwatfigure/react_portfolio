import React from 'react';
import resume from '../pdf/Zachary-SwatfigureResume.pdf';
import '../style/Home.css';

export default function Blog() {
  return (
    <div>
      <h1 className = "title">More About Me... but proffesionally</h1>
      <section className = 'resumeContainer'>
        <embed src= {resume} width="90%"/>
      </section>
    </div>
  );
}
