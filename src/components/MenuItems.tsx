import { useState, useEffect, useRef } from 'react'
import Dropdown from './Dropdown'

import { Link } from 'react-router-dom'
type PropsType = {
  items: any,
  depthLevel: number
}
const MenuItems = ({ items, depthLevel }: PropsType) => {
  const [dropdown, setDropdown] = useState(false)

  const ref = useRef<null | HTMLLIElement>(null)

  useEffect(() => {
    const handler = (event: MouseEvent |  TouchEvent) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [dropdown])

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true)
  }

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false)
  }

  const closeDropdown = () => {
    dropdown && setDropdown(false)
  }

  return (
    <li
      className='relative text-sm text-left'
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            className='flex items-center w-full text-left hover:bg-sky-200'
            type='button'
            aria-haspopup='menu'
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <Link
                className='block px-4 py-3 text-left hover:bg-sky-200'
                to={items.url}
              >
                {items.title}
              </Link>
            )}

            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                0 && window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <span className='arrow' />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            className='w-full text-left px-4 py-3 hover:bg-sky-200'
            type='button'
            aria-haspopup='menu'
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{' '}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className='arrow' />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link
          className='block  text-left  px-4 py-3 hover:bg-sky-200'
          to={items.url}
        >
          {items.title}
        </Link>
      )}
    </li>
  )
}

export default MenuItems
