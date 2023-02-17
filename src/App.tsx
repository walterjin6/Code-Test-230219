import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          

          <Route path='*' element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
