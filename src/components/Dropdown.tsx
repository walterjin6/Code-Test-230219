import MenuItems from './MenuItems'

type PropsType = {
  submenus: any
  dropdown: boolean
  depthLevel: number
}
export interface CommonProps {
  name: string
  href: string
}

export interface MyProps {
  name: string
  on: boolean
  children: Array<CommonProps>
}

const Dropdown = ({ submenus, dropdown, depthLevel }: PropsType) => {
  depthLevel = depthLevel + 1
  const dropdownClass = depthLevel > 1 ? 'absolute left-full -top-1' : ''
  const dropdownBoxClass =
    'absolute right-0 left-auto text-[0.875rem] z-99  min-w-[10rem] py-1 bg-white rounded-lg shadow-lg shadow-indigo-500/40'

  return (
    <ul
      className={`${dropdownBoxClass} ${dropdownClass} ${
        dropdown ? ' block' : 'hidden'
      }`}
    >
      {submenus.map((submenu: any, index: number) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  )
}

export default Dropdown
