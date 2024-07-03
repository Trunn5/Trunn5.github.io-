import React from 'react';
import '../styles/reset.css';
import '../styles/normalize.css';
import '../styles/style.css';
import '../styles/comic.css';

const Projects: React.FC = () => (
  <section id="projects">
    <h1>My Projects</h1>
    <hr />
    <ul className="section__block-container">
      <li className="section__block">
        <div className="section__block__name">ABASPB Bot</div>
        <p>Telegram bot for children center of ABA therapies.</p>
      </li>
      <li className="section__block">
        <div className="section__block__name">SMM Helper Bot</div>
        <p>Telegram bot with AI generation an answer to comments of user in companies social media.</p>
      </li>
    </ul>
    <hr />
  </section>
);

export default Projects;
