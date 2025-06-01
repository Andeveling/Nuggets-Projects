import { menuRoutes } from "@/presentation/router/menu-routes"
import { Outlet } from "react-router-dom"
import { SidebarMenuItem } from "@/presentation/components/sidebar/SidebarMenuItem"

export const DashboardLayout = () => {
  return (
    <main className='flex flex-row mt-7'>
      <nav className='hidden sm:flex flex-col ml-5 w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-3xl'>
        <h1 className='font-bold text-lg lg:text-3xl'>
          ReactGPT<span className='text-indigo-500'>.</span>
        </h1>
        <span className='text-xl'>Bienvenido</span>

        <div className='border-gray-700 border my-3' />

        {/* Opciones del menú */}
        <ul className='flex flex-col mt-3 gap-1'>
          {menuRoutes.map((route) => (
            <li key={route.to} className='list-none'>
              <SidebarMenuItem to={route.to} icon={route.icon} title={route.title} description={route.description} />
            </li>
          ))}
        </ul>
      </nav>

      <section className='mx-3 sm:mx-20 flex flex-col w-full h-[calc(100vh-50px)]  bg-white bg-opacity-10 p-5 rounded-3xl'>
        <div className='flex flex-row h-full'>
          <div className='flex flex-col flex-auto h-full p-1'>
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  )
}
