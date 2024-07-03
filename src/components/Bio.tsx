import React from 'react';
import githubIcon from '../images/github-mark.png';
import vkIcon from '../images/vk_icon.png';
import tgIcon from '../images/tg_icon.png';
import '../styles/reset.css';
import '../styles/normalize.css';
import '../styles/style.css';
import '../styles/comic.css';


const Bio: React.FC = () => (
  <section id="bio">
    <h1>My Links</h1>
    <hr />
    <ul className="section__block-container">
      <li className="section__link">
        <a href="https://github.com/Trunn5/" id="gh-link">
          <img className="section__block section__block--icon" src={githubIcon} alt="gh-icon" />
        </a>
      </li>
      <li className="section__link">
        <a href="https://vk.com/prosvirkind" id="vk-link">
          <img className="section__block section__block--icon" src={vkIcon} alt="vk-icon" />
        </a>
      </li>
      <li className="section__link">
        <a href="https://t.me/dmitry5567" id="tg-link">
          <img className="section__block section__block--icon" src={tgIcon} alt="tg-icon" />
        </a>
      </li>
    </ul>
    <hr />
  </section>
);

export default Bio;
