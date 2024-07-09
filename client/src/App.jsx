import {BrowserRouter , Routes, Route} from 'react-router-dom';

import Home from "./pages/Home"
import React from 'react'
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Header from './components/Header';
const App = () => {
  return (
    <BrowserRouter>
    <Header /> {/* such that it is applicable to all the routes present*/}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/projects' element={<Projects />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App