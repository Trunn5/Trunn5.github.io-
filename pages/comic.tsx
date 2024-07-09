import React, { useState } from 'react';
import ComicPage, { ComicPageProps } from '../components/ComicPage'; // Import ComicPageProps

const Comic: React.FC = () => {
  const [comicData, setComicData] = useState<ComicPageProps>({
    comic: null,
    error: null,
  });

  return <ComicPage comic={comicData.comic} error={comicData.error} />;
};

export default Comic;
