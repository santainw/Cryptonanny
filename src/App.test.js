import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders GGWP link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/GGWP/i);
  expect(linkElement).toBeInTheDocument();
});
