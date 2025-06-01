import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import Movie from './Pages/Movie'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Theater from './Pages/Theater'
import Seat from './Pages/seat'
import BookDetails from './Pages/BookDetails'

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
          <Route path='/theater' element={<Theater />} />
          <Route path='/seat' element={<Seat />} />
          <Route path='/book-details' element={<BookDetails />} />
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
