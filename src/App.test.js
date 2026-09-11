import { render, screen } from '@testing-library/react';
import App from './App';

test('presents Jack Carron and his experience', () => {
  const { container } = render(<App />);

  expect(container.querySelector('h1')).toHaveTextContent(
    'I build dependable software for complex systems.'
  );
  expect(screen.getByText('Amazon Web Services')).toBeInTheDocument();
  expect(screen.getByText('Deloitte Consulting')).toBeInTheDocument();
});
