
import Navbar from './Components/Navbar/Navbar'
import './index.scss'

import Homepage from './routes/Homepage/Homepage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from './routes/layout/Layout.jsx'
import SinglePage from './routes/SinglePage/SinglePage.jsx'
import ListPage from './routes/list/ListPage.jsx'
import ProfilePage from './routes/profilePage/ProfilePage.jsx'




function App() {
  const router = createBrowserRouter([
    {

      path: "/",
      element: <Layout />,
      children:[
        {
        path: "/",
        element: <Homepage />
      },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        },
        {
          path: "/profile",
          element:<ProfilePage/>
        }



      ]
    },
    
  ])

  return (
    <>
    
      <RouterProvider router={router} />


    </>
  )
}

export default App
