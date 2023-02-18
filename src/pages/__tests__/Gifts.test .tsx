import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gifts from '../Gifts'

describe('Test suits for Gifts component', () => {
  it('should display "Gifts page"', () => {
    const { getByTestId } = render(<Gifts />)
    const element = getByTestId('gifts-1')
    expect(element).toHaveTextContent('Gifts page')
  })
})