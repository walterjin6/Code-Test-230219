import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { FaHackerrank } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { selectUser } from '../store/appSlice'

const Header = () => {
    const user = useSelector(selectUser)
  return (
    <header className='shadow-lg shadow-indigo-500/40'>
      <div className='flex justify-center items-center px-1 py-2 '>
        <Link to='/' className='logo'>
          <FaHackerrank className='text-3xl text-red-500 px-1 py-1' />
        </Link>
        <Navbar />
        {user ? <p>Welcome, {user}!</p> : <Link to='/login'>Login</Link>}
      </div>
    </header>
  )
}

export default Header
