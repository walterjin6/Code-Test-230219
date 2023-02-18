import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Kids from '../Kids'

describe('Test suits for Kids component', () => {
  it('should display "Kids page"', () => {
    const { getByTestId } = render(<Kids />)
    const element = getByTestId('kids-1')
    expect(element).toHaveTextContent('Kids page')
  })
})