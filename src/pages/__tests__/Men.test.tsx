import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Men from '../Men'

describe('Test suits for Men component', () => {
  it('should display "Men page"', () => {
    const { getByTestId } = render(<Men />)
    const element = getByTestId('men-1')
    expect(element).toHaveTextContent('Men page')
  })
})