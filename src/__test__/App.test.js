import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/dom';

import App from '../App';

test('renders title', () => {
  render(<App />);
  const title = screen.getByText('React-with-parcel-boilerplate');
  expect(title).toBeInTheDocument();
});
