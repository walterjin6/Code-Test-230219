import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Women from '../Women'

describe('Test suits for Women component', () => {
  it('should display "Women page"', () => {
    const { getByTestId } = render(<Women />)
    const element = getByTestId('women-1')
    expect(element).toHaveTextContent('Women page')
  })
})