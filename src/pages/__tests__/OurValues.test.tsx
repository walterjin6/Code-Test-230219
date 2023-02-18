import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import OurValues from '../OurValues'

describe('Test suits for OurValues component', () => {
  it('should display "Our values"', () => {
    const { getByTestId } = render(<OurValues />)
    const element = getByTestId('ourValues-1')
    expect(element).toHaveTextContent('Our values')
  })
})