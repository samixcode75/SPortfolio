import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider,createRoutesFromElements, Form } from 'react-router'
import { Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import Hero from './conponenets/Hero.jsx'
import About from './conponenets/About.jsx'
import Certificates from './conponenets/Certificate.jsx'
import Project from './conponenets/Projects.jsx'
import Skills from './conponenets/Skills.jsx'
import Education from './conponenets/Education.jsx'
import Contact from './conponenets/Contact.jsx'
const router=createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route index element={<Hero/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='certificates' element={<Certificates/>}/>
         <Route path='projects' element={<Project/>}/>
          <Route path='skills' element={<Skills/>}/>
            <Route path='education' element={<Education/>}/>
               <Route path='contact' element={<Contact/>}/>

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}><App /></RouterProvider>
    
  </StrictMode>,
)
