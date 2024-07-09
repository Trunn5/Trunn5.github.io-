import React from 'react';
import ComicPage from '../../components/ComicPage';
import { GetServerSideProps } from 'next';
import { ComicData } from '../../types';

interface ComicProps {
  comic: ComicData | null;
  error: string | null;
}

const Comic: React.FC<ComicProps> = ({ comic, error }) => {
  return <ComicPage comic={comic} error={error} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { email } = context.query;

  const fetchXKCDid = async (email: string): Promise<number> => {
    const params = new URLSearchParams({ email });
    const response = await fetch(
      `https://fwd.innopolis.university/api/hw2?${params}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch ID');
    }
    const data = await response.json();
    return data;
  };

  const fetchXKCDdata = async (id: number): Promise<ComicData> => {
    const params = new URLSearchParams({ id: id.toString() });
    const response = await fetch(
      `https://fwd.innopolis.university/api/comic?${params}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch comic data');
    }
    return response.json();
  };

  try {
    const id = await fetchXKCDid(email as string);
    const comic = await fetchXKCDdata(id);
    return {
      props: {
        comic,
        error: null,
      },
    };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return {
      props: {
        comic: null,
        error: errorMessage,
      },
    };
  }
};

export default Comic;
