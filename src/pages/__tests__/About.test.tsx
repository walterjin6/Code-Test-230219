import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import About from '../About'

describe('Test suits for About component', () => {
  it('should display "About page"', () => {
    const { getByTestId } = render(<About />)
    const aboutElement = getByTestId('about-1')
    expect(aboutElement).toHaveTextContent('About page')
  })
})