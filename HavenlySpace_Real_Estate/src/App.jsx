
import Navbar from './Components/Navbar/Navbar'
import './index.scss'

import Homepage from './routes/Homepage/Homepage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ListPage from './Components/listPage/ListPage.jsx'
import Layout from './routes/layout/Layout.jsx'
import SinglePage from './routes/SinglePage/SinglePage.jsx'



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
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage/>
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
