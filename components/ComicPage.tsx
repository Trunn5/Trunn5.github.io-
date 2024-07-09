import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ComicData } from '../types';

export interface ComicPageProps {
  comic: ComicData | null;
  error: string | null;
}

const ComicPage: React.FC<ComicPageProps> = ({ comic, error }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    window.location.href = `/comic/${email}`;
  };

  return (
    <section id="comic">
      <h1>Get XKCD comic</h1>
      <hr />
      <label htmlFor="email">Put your email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Get</button>
      <hr />
      <div className="section__block" id="comic-art">
        {error ? (
          <p>Error: {error}</p>
        ) : comic ? (
          <>
            <span>{comic.safe_title}</span>
            <span className="date">
              {formatDistanceToNow(
                new Date(
                  parseInt(comic.year),
                  parseInt(comic.month) - 1,
                  parseInt(comic.day)
                ),
                {
                  addSuffix: true,
                }
              )}
            </span>
            <img src={comic.img} alt={comic.alt} />
          </>
        ) : (
          <p>Comic will be here!</p>
        )}
      </div>
    </section>
  );
};

export default ComicPage;
