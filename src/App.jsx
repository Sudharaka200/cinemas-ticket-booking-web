import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
