import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Clothing from '../Clothing'

describe('Test suits for Clothing component', () => {
  it('should display "Clothing page"', () => {
    const { getByTestId } = render(<Clothing />)
    const element = getByTestId('clothing-1')
    expect(element).toHaveTextContent('Clothing page')
  })
})