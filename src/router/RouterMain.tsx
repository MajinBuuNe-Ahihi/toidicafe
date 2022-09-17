import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {MainLayout} from '../components/layout'
import { Home,Test,Page404} from '../components'

type Props = {}

export function RouterMain({}: Props) {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home />}></Route>
        <Route path='test' element={<Test />}></Route>
        <Route path='*' element = {<Page404/>}></Route>
      </Route>
    </Routes>
  )
}