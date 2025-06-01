import { NavLink } from "react-router-dom"

type Props = {
  to: string
  icon: React.ReactNode
  title: string
  description: string
}

export const SidebarMenuItem = ({ to, icon, title, description }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-row items-center gap-2 rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
          isActive ? "bg-gray-100 text-gray-900" : "text-gray-700"
        }`
      }>
      <i className='mr-2 text-xl'>{icon}</i>
      <div className='flex flex-col grow'>
        <span className='text-sm font-semibold'>{title}</span>
        <span className='text-xs text-gray-500'>{description}</span>
      </div>{" "}
    </NavLink>
  )
}
