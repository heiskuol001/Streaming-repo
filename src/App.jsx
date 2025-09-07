import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FoodCard from './components/FoodCard'
import GehgehForm from './components/GehgehForm'
import HomePage from './components/HomePage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/*' element={<HomePage />} />
          <Route path='/FoodCard' element={<FoodCard />} />
          <Route path='/GehgehForm' element={<GehgehForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
