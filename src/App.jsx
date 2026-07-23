import { useState } from 'react'

import Navbar from './conponenets/Navbar'
import { Outlet } from 'react-router'
function App() {


  return (
    <>
<Navbar/>
<Outlet/>
     </>
  );
}

export default App
