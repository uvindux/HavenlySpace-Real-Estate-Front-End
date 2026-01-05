
import Navbar from './Components/Navbar/Navbar'
import './index.scss'

import Homepage from './routes/homePage/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from './routes/layout/Layout.jsx'
import SinglePage from './routes/SinglePage/SinglePage.jsx'
import ListPage from './routes/list/ListPage.jsx'
import ProfilePage from './routes/profilePage/ProfilePage.jsx'
import AuthenticationPage from './routes/authenticationPage/AuthenticationPage.jsx'
import NewPostPage from './routes/newPostPage/newPostPage.jsx'




function App() {
  const router = createBrowserRouter([
    {

      path: "/",
      element: <Layout />,
      children: [
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
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/authenticate",
          element: <AuthenticationPage />
        },
        {
          path: "/add",
          element: <NewPostPage />
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
