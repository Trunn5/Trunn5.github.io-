import React from 'react';

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
        <p>
          Telegram bot with AI generation that answers comments of users in
          company&apos;s social media.
        </p>
      </li>
    </ul>
    <hr />
  </section>
);

export default Projects;
