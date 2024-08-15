import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Outlet />
    </div>
  )
}