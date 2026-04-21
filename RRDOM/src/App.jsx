import {useState} from 'react'  
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'
import Navbar from './components/Navbar'
import reactlogo from './assets/react.svg'
import './App.css'
import ReactDOM from 'react-dom/client'


function App() {
  const [count, setCount] = useState(0) 

  return (  
    <Router>
      <Navbar />
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} /> 
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Notfound />} />
        
      </Routes>

    </Router>
  )
}

export default App