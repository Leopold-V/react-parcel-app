import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App';

test('renders title', () => {
  render(<App />);
  const title = screen.getByText('React with parcel starter-kit');
  expect(title).toBeInTheDocument();
});
