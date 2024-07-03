import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ComicPage from './components/ComicPage';
import Bio from './components/Bio';
import Projects from './components/Projects';
import './styles/style.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="/comic" element={<ComicPage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
