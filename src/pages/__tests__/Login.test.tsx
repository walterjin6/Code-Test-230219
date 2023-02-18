import Login from '../Login'
import Header from '../../components/Header'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { server } from '../../tests/mocks/server'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../../store/appSlice'

describe('Login component tests', () => {
  let store: any
  beforeEach(() => {
    store = configureStore({
      reducer: {
        app: appReducer,
      },
    })
  })
  beforeAll(() =>
    server.listen({
      onUnhandledRequest: 'error',
    })
  )
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should submit the form and display the success message', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Login />
        </BrowserRouter>
      </Provider>
    )

    const usernameInput = screen.getByLabelText('username')
    const passwordInput = screen.getByLabelText('password')
    //const submitButton = screen.getByRole('button', { name: 'submit' })
    const submitButton = screen.getByText(/SUBMIT/i, { selector: 'button' })
    fireEvent.change(usernameInput, { target: { value: 'admin' } })
    fireEvent.change(passwordInput, { target: { value: '12345' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      let successHeader = screen.getByText(/You are logged in/)
      expect(successHeader).toBeInTheDocument()
       successHeader = screen.getByText(/Welcome, admin!/)
      expect(successHeader).toBeInTheDocument()
      //expect(screen.getByText('You are logged in')).toBeInTheDocument()
    })
  })
})
