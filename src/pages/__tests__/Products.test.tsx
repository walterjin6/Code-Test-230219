import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Products from '../Products'

describe('Test suits for Products component', () => {
  it('should display "Products page"', () => {
    const { getByTestId } = render(<Products />)
    const element = getByTestId('products-1')
    expect(element).toHaveTextContent('Products page')
  })
})