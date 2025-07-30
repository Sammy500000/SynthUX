import { render, screen } from '@testing-library/react';
import LandingPage from './page';

describe('LandingPage', () => {
  it('renders the main heading', () => {
    render(<LandingPage />);
    const heading = screen.getByRole('heading', {
      name: /AI-Powered UX Testing/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
