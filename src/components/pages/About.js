import React from 'react';
import '../style/Home.css'


export default function About() {
  return (
    <div className="homeContainer">
      <div className="welcomeBox">
        <h1 className="title">About Me</h1>
      </div>
      <div className='aboutHome'>
        <p className = 'blurb'>
          Hi, my name is Zach! I was born in Seattle, WA in 1999 so I don't count myself as a 2000 baby. The disgrace of that would haunt me. I moved to Sanibel, FL in 6th grade. I then moved to Longmont, CO in 7th grade, and I have been here ever since. 
          I am looking for a change of scenery right now. I love CO, but I think it is time to see what else is out there. I enlisted with Marine Corp.
          Reserve in 2019. I love my job in the reserves, which coincidently it has a lot to do with programming.
          I am looking for a front-end or full-stack development job that is either remote or a reasonable drive from Olympia, WA.
          I am flexible, able to learn new things, I work well under pressure, 
          and have a lot of motivation.
        </p>
      </div>

    </div>
  );
}
