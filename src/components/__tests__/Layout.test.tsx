import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../Layout'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../../store/appSlice'

describe('Test suits for Layout', () => {
  let store: any

  beforeEach(() => {
    store = configureStore({
      reducer: {
        app: appReducer,
      },
    })
  })
  it('should match with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
