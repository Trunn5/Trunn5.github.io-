import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Dmitrii Prosvirkin</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/comic">Comic</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
