import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './constants/routes'
import Home from './view/pages/Home'

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />
  }
])

function Router (): React.ReactElement {
  return <RouterProvider router={router} />
}

export default Router
