import React from 'react';

const Bio: React.FC = () => (
  <section id="bio">
    <h1>My Links</h1>
    <hr />
    <ul className="section__block-container">
      <li className="section__link">
        <a href="https://github.com/Trunn5/" id="gh-link">
          <img className="section__block section__block--icon" src="/images/github-mark.png" alt="gh-icon" />
        </a>
      </li>
      <li className="section__link">
        <a href="https://vk.com/prosvirkind" id="vk-link">
          <img className="section__block section__block--icon" src="/images/vk_icon.png" alt="vk-icon" />
        </a>
      </li>
      <li className="section__link">
        <a href="https://t.me/dmitry5567" id="tg-link">
          <img className="section__block section__block--icon" src="/images/tg_icon.png" alt="tg-icon" />
        </a>
      </li>
    </ul>
    <hr />
  </section>
);

export default Bio;
