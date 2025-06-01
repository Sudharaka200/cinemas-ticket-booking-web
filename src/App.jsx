import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import Movie from './Pages/Movie'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/movie' element={<Movie />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />} /> 
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
