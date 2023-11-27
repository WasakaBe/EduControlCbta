import React from 'react'
//importamos sobre routes DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//public
import Index from '../Views/Public'
import Alumns from '../Login/Alumns/Alumns';
export default function AppRoutes() {
  return (
    <div>
      <Router>
        <Routes>
            <Route exact path="/" element={<Index />} />
            <Route  path="/LoginAlumns" element={<Alumns />} />
        </Routes>
      </Router>
    </div>
  )
}
