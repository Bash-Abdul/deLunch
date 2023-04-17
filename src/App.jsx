import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">
      {/* <Router>
         <Navbar />
         <Routes>
            <Route path='/' exact Component={Home} />
         </Routes>
      </Router> */}
      <Navbar />
    </div>
  )
}


export default App
