import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div>
      
      <div className='flex justify-center items-center py-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
