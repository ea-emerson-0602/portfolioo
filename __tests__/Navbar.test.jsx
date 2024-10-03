import Navbar from "../app/(site)/components/global/Navbar"
// __tests__/Navbar.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';// Mock Next.js router

const mockRouter = {
  pathname: '/',
  push: jest.fn(),
  replace: jest.fn(),
};

describe('Navbar', () => {
  it('renders the Navbar component', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Navbar />
      </RouterContext.Provider>
    );

    // Check if the logo is rendered
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    
    // Check if navigation links are present
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    
    // Check if search bar is present
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();

    // Check if mobile menu button is present
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument();
  });

  it('toggles the mobile menu', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Navbar />
      </RouterContext.Provider>
    );

    const mobileMenuButton = screen.getByLabelText('Toggle menu');

    // Initially, the mobile menu should be hidden
    expect(screen.queryByText('About')).not.toBeVisible();
    
    // Click the mobile menu button to open the menu
    fireEvent.click(mobileMenuButton);
    
    // Check if the mobile menu is now visible
    expect(screen.getByText('About')).toBeVisible();
    
    // Click the mobile menu button again to close the menu
    fireEvent.click(mobileMenuButton);
    
    // Check if the mobile menu is hidden
    expect(screen.queryByText('About')).not.toBeVisible();
  });
});
