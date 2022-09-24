import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../components/layout'
import { Home, Promo, Page404, AddPlace, About, Contact } from '../components'



type Props = {}

export function RouterMain({}: Props) {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home />}></Route>
        <Route path='promo' element={<Promo />}></Route>
        <Route path='add-place' element={<AddPlace />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='*' element = {<Page404/>}></Route>
      </Route>
    </Routes>
  )
}