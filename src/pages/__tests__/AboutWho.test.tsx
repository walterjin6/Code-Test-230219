import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AboutWho from '../AboutWho'

describe('Test suits for AboutWho component', () => {
  it('should display "Who we are"', () => {
    const { getByTestId } = render(<AboutWho />)
    const element = getByTestId('aboutWho-1')
    expect(element).toHaveTextContent('Who we are')
  })
})