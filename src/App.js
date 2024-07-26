import React, { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import Home from './Components/Home/Home'
import Types from './Components/Datatypes/Datatypes'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Results/Results'
import Testimonials from './Components/Technology/Technology'
import Contact from './Components/Contacts/Contact'
import Footer from './Components/Footer/Footer'
import Colourizer from './Components/Colourizer/Colourizer'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const App = () => {

  const[playState,setPlayState] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element:<div><Navbar/><Home/><Title title = 'Types' subtitle = 'Types Of Dataset' /></div>
    },
    {
      path: "/upload",
      element:<div><Navbar notHome={true}/><Colourizer/><Title title = 'Types' subtitle = 'Types Of Dataset' /></div>
    }

  ])

  return (
    <div>
      

      <RouterProvider router={router}/>
      
      <div className='container'>
      <Types/>
      <About setPlayState={setPlayState}/>
      <Title title = 'Gallery' subtitle='Our Results'/>
      <Campus/>
      <Title title = 'Frameworks' subtitle='Technology used'/>
      <Testimonials/>
      <Title title= 'Contact Us' subtitle='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      {/* <VideoPlayer playState={playState} setPlayState={setPlayState}/> */}
    </div>

  )
}

export default App