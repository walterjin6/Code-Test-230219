import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Shoes from './pages/Shoes'
import Gifts from './pages/Gifts'
import Kids from './pages/Kids'
import Women from './pages/Women'
import Men from './pages/Men'
import AboutWho from './pages/AboutWho'
import OurValues from './pages/OurValues'
import Clothing from './pages/Clothing'
import Adults from './pages/Adults'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='about' element={<About />} />
          <Route path='shoes' element={<Shoes />} />
          <Route path='clothing' element={<Clothing />} />
          <Route path='adults' element={<Adults />} />
          <Route path='kids' element={<Kids />} />
          <Route path='men' element={<Men />} />
          <Route path='gifts' element={<Gifts />} />
          <Route path='women' element={<Women />} />
          <Route path='who-we-are' element={<AboutWho />} />
          <Route path='our-values' element={<OurValues />} />
          <Route path='*' element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
