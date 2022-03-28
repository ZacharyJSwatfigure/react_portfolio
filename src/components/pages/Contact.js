import React from 'react';
import '../style/Home.css';


export default function Contact() {
  return (
    <div>
      <h1 className='title'>Methods of Contact</h1>
      <section className='contact-box'>
        <ul className='contact-list'>
          <li>
            <h1 className='titleSmall'>Email</h1>
            <div>
              <a  className='links' href="mailto:zacharyswatfigure@gmail.com"> zacharyswatfigure@gmail.com </a>
            </div>
          </li>
          <li>
            <h1 className='titleSmall'>LinkDen</h1>
            <div>
              <a className='links' href = 'https://www.linkedin.com/in/zachary-swatfigure-592112222/'> To my Linkedin page</a>
            </div>
          </li>
          <li>
            <h1 className='titleSmall'>Indeed</h1>
            <div>
              <a className='links' href = 'https://my.indeed.com/resume?hl=en&co=US&from=gnav-menu-homepage&_ga=2.92725151.307266928.1648484568-1269944776.1637547462'>To my Indeed Page</a>
            </div>
          </li>
          <li>
            <h1 className='titleSmall'>Discord</h1>
            <div>
              RazeTheCity#7048
            </div>
          </li>
          <li>
            <h1 className='titleSmall'>Github</h1>
            <div>
              <a className='links' href = "https://github.com/ZacharyJSwatfigure" >To my Github page</a>
            </div>
          </li>
        </ul>


      </section>
    </div>
  );
}
