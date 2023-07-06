import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../src/app/page';

describe('Home', () => {
  it('should render without throwing an error', function () {
    render(<Home />);
    const docs = screen.getByTestId('button-login')
    expect(docs).toBeTruthy();
  });
  it('should redirect to /contato', async function () {
    render(<Home />);
    const docs = screen.getByRole('link', {
      name: /contato/i
    })
    docs.click();
    screen.debug();
  });
})