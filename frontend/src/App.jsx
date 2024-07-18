import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from "./UserPages/Home"
function App() {
  return (
<>
<Navbar/>
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
</Routes>

</BrowserRouter>
</>
  )
}

export default App