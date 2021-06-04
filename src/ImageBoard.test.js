import { render, screen } from '@testing-library/react';
import ImageBoard from './ImageBoard';

test('renders learn react link', () => {
  render(<ImageBoard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
