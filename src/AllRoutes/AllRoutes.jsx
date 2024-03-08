import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Componets/Home'
import { Login } from '../Componets/Login'
import { Signup } from '../Componets/Signup'
import { Private } from '../Componets/Private'
import { Details } from '../Componets/Details'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Private><Home/></Private>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/detail/:id" element={<Private><Details/></Private>} />
        </Routes>
    </div>
  )
}
