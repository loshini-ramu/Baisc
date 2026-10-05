import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import child from './child.jsx'
import Notfound from './Notfound.jsx'

const router = createBrowserRouter([{
  path: "/",
  Component: App
}, {
  path: "/home/:id",
  Component: Navbar
},{
  path:"/child",
  Component: Child
}, {
  path: "*",
  Component: Notfound
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
