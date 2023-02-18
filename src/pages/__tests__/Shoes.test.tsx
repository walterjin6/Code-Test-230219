import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Shoes from '../Shoes'

describe('Test suits for Shoes component', () => {
  it('should display "Shoes page"', () => {
    const { getByTestId } = render(<Shoes />)
    const element = getByTestId('shoes-1')
    expect(element).toHaveTextContent('Shoes page')
  })
})