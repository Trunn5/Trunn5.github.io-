import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ComicData } from '../types';

const ComicPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [comic, setComic] = useState<ComicData | null>(null);

  const fetchXKCDid = async (email: string): Promise<number> => {
    const params = new URLSearchParams({ email });
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?${params}`);
    if (!response.ok) {
      throw new Error('Failed to fetch ID');
    }
    const data = await response.json();
    return data;
  };

  const fetchXKCDdata = async (id: number): Promise<ComicData> => {
    const params = new URLSearchParams({ id: id.toString() });
    const response = await fetch(`https://fwd.innopolis.university/api/comic?${params}`);
    if (!response.ok) {
      throw new Error('Failed to fetch comic data');
    }
    return response.json();
  };

  const handleSubmit = async () => {
    try {
      const id = await fetchXKCDid(email);
      const data = await fetchXKCDdata(id);
      setComic(data);
    } catch (error) {
      console.error(error);
      // Handle error display or logging as needed
    }
  };

  return (
    <section id="comic">
      <h1>Get XKCD comic</h1>
      <hr />
      <label htmlFor="email">Put your email</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Get</button>
      <hr />
      <div className="section__block" id="comic-art">
        {comic ? (
          <>
            <span>{comic.safe_title}</span>
            <span className="date">
              {formatDistanceToNow(new Date(parseInt(comic.year), parseInt(comic.month) - 1, parseInt(comic.day)), {
                addSuffix: true,
              })}
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
