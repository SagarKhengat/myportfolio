import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sagar G. Khengat</h2>
        <p><a href="mailto:sagarkhengat@gmail.com">sagarkhengat@gmail.com</a></p>
        <p>Whatsapp/Call: +919860219934</p>

      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Sagar. I like to keep things simple.
        I am a <a href="https://en.wikipedia.org/wiki/Savitribai_Phule_Pune_University">SPPU, Pune</a> graduate in computer science and engineering, currently I&apos;m working in<a href="https://www.linkedin.com/company/copious-healthcare-inc"> Copious Healthcare</a> as full stack engineer. Before<a href="https://www.linkedin.com/company/copious-healthcare-inc"> Copious Healthcare</a> I was
        at <a href="https://anomaly.co.in/">Anomaly solutions</a>, <a href="https://www.qlc.in/">QLC India</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  </section>
);

export default Nav;
