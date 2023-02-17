import Navbar from './Navbar'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='shadow-lg shadow-indigo-500/40'>
      <div className='flex justify-center items-center px-1 py-2 '>
        <Link to='/' className='logo'>
          Logo
        </Link>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
