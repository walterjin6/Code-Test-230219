import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div>
      <Header />
      <div className='flex justify-center items-center py-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
