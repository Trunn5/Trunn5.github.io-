import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/reset.css';
import '../styles/normalize.css';
import '../styles/style.css';
import '../styles/comic.css';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Dmitrii Prosvirkin</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/comic">Comic</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
