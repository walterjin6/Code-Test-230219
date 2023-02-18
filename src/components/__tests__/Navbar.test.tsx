import { fireEvent, render, screen } from '@testing-library/react'
import Navbar from '../Navbar'
import { BrowserRouter } from 'react-router-dom'

describe('Test suits for Navbar nested Menu', () => {
  it('opens and closes when the toggle button is clicked', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    // Verify that the menu is initially closed
    let menuButton = screen.getByRole('button', { name: /Products/i })
    expect(menuButton).toBeInTheDocument()
    expect(screen.getByText('Clothing')).not.toBeVisible()
    expect(screen.queryByRole('link', { name: /Clothing/i })).not.toBeVisible()

    // Click the toggle button to open the menu
    fireEvent.click(menuButton)

    // Verify that the menu is now open
    menuButton = screen.getByRole('button', { name: /Clothing/i })
    expect(menuButton).toBeVisible()
    expect(
      screen.queryByRole('button', { name: /Adults;/i })
    ).not.toBeInTheDocument()
    fireEvent.click(menuButton)
    menuButton = screen.getByRole('button', { name: /Adults/i })
    expect(menuButton).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /Men;/i })
    ).not.toBeInTheDocument()
    fireEvent.click(menuButton)
    menuButton = screen.getByRole('button', { name: /Men/i })
    expect(menuButton).toBeInTheDocument()
  })
})
