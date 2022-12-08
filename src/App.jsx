import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Error from './Error'
import Movies from './SingleMovie'
import './App.css'

function App() {
  return <Routes>
    <Route path="/" exact element={<Home/>}></Route>
    <Route path="/movies/:id" element={<Movies />}></Route>
    <Route path='*' element={<Error/>}/>
  </Routes>
}

export default App
