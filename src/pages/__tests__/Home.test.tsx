import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../Home'

describe('Test suits for Home component', () => {
  it('should display "Welcome to Home Page!"', () => {
    const { getByTestId } = render(<Home />)
    const element = getByTestId('home-1')
    expect(element).toHaveTextContent('Welcome to Home Page!')
  })
})