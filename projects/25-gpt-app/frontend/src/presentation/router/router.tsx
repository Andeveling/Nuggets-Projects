import { createBrowserRouter, Navigate } from "react-router-dom"
import { menuRoutes } from "./menu-routes"
import { DashboardLayout } from "@/presentation/layouts/DashboardLayout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      ...menuRoutes.map((route) => ({
        path: route.to,
        element: route.component,
      })),
      {
        path: "",
        element: <Navigate to={menuRoutes[0].to} />,
      },
    ],
  },
])
