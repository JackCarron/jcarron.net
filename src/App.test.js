import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('presents Jack Carron and his experience', () => {
  const { container } = render(<App />);

  expect(container.querySelector('h1')).toHaveTextContent(
    'Building reliable software for complex systems.'
  );
  expect(screen.getByText('Amazon Web Services')).toBeInTheDocument();
  expect(screen.getByText('Deloitte Consulting')).toBeInTheDocument();
});

test('toggles the mobile navigation', () => {
  render(<App />);

  const menuButton = screen.getByText('Menu');
  expect(menuButton).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(menuButton);
  expect(screen.getByText('Close')).toHaveAttribute('aria-expanded', 'true');
});
