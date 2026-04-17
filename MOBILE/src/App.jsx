import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Coding from './Coding.jsx'
import Student from './components/Student.jsx'

function App() {

  return (
    <>
    <h1>Student Information</h1>
      <Student name={'Aryan Verma'} age={20} course={'Maths'} />
      <Student name={'John Doe'} age={22} course={'Physics'} />
      <Student name={'Jane Smith'} age={19} course={'Chemistry'} />
    </>
  )
}

export default App
