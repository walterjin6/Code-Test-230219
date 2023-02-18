import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Adults from '../Adults'

describe('Test suits for Adults component', () => {
  it('should display "Adults pag"', () => {
    const { getByTestId } = render(<Adults />)
    const element = getByTestId('adults-1')
    expect(element).toHaveTextContent('Adults pag')
  })
})