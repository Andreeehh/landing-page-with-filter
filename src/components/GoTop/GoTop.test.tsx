import { screen } from '@testing-library/react';

describe('<GoTop />', () => {
  it('should render go to top button', () => {
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    );
  });
});
