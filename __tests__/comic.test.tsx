import { render, screen } from '@testing-library/react';
import ComicPage, { ComicProps } from '../pages/comic/[email]';

test('renders comic title', () => {
  const comic: ComicProps['comic'] = { title: 'Sample Comic', img: '/sample.jpg', description: 'A sample comic' };
  const error: ComicProps['error'] = null; // Provide error as null since it's part of ComicPageProps
  render(<ComicPage comic={comic} error={error} />); // Render ComicPage with required props
  const titleElement = screen.getByText(/Sample Comic/i);
  expect(titleElement).toBeInTheDocument();
});
