import { Children, useState } from 'react'

import { AuthPage } from './Pages/Authentication/AuthPage'
import { Navbar } from './Compontents/common/NavBar'
import { Hero } from './Pages/HomePage/Hero'
import { Features } from './Pages/HomePage/Feature'
import { Footer } from './Pages/HomePage/Footer'
import { Events } from './Pages/HomePage/Events'
import Applayout from './Pages/ClubCarusel/Applayout'
import {AboutUs} from './Pages/AboutUs'
import { element } from 'prop-types'
import {ContactUs} from './Pages/Contact/contactUs'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {HomePg} from './Pages/HomePg'
import NotFound from './Pages/NotFound'
import Body from "./Pages/Body"
import StudentDashBoard from './Pages/DashBoard/StudentDashBoard'
import ClubLeadDashBoard from './Pages/DashBoard/ClubLeadDashBoard'
import AdminPanel from './Pages/DashBoard/AdminPanel'
import ClubGrid from './Compontents/Clubs/ClubGrid'
import EuphoneyApp from './Compontents/AllClubs/Euphoney/EuphoneyApp'
import DraculaApp from './Compontents/AllClubs/Dracula/DraculaApp'
import LiteratiApp from './Compontents/AllClubs/Literati/LiteratiApp'
import GroboticsApp from './Compontents/AllClubs/Grobotics/GroboticsApp'
import GfgApp from "./Compontents/AllClubs/GFG/GfgApp"
import DecoderApp from './Compontents/AllClubs/Decoder/DecoderApp'


function App() {



  const router = createBrowserRouter([
    {
      path:"/" ,
      element:<HomePg></HomePg>,
      errorElement:<NotFound/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<AboutUs/>
        },
        {
          path:"/contact",
          element:<ContactUs/>
        },
        {
          path:"/feature",
          element:<Features/>,
          children:[
            {
              path:"/feature",
              element:<Features/>
            }
          ]
        }
      ]
    },

    {
      path:"/auth",
      element:<AuthPage/>
    },

    {
      path:"/studentdashboard",
      element:<StudentDashBoard/>,
      
    },
    {
      path:"/clubs",
      element:<ClubGrid/>,  
      
    },
    {
      path:"/euphoney",
      element:<EuphoneyApp/>
    },
    {
        path:"/dracula",
        element:<DraculaApp/>
    },
    {
      
        path:"/literati",
        element:<LiteratiApp/>
    
    },
    {
      path:"/grobotics",
      element:<GroboticsApp/>
    },
    {
      path:"/gfg",
      element:<GfgApp/>
    },
    {
      path:"/decoder",
      element:<DecoderApp/>
    },
    {
      path:"/adminpanel",
      element:<AdminPanel/>
    },
    {
      path:"/clubleaddashboard",
      element:<ClubLeadDashBoard/>
    },
    {
    
    }

  ])
  return (
    <>
      
    <RouterProvider router={router}></RouterProvider>
      
 
        
    </>
  )
}

export default App
