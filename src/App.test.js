import { render, screen } from '@testing-library/react';
import App from './App';

test('render weather forast heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather Forecast!/i);
  expect(linkElement).toBeInTheDocument();
});
