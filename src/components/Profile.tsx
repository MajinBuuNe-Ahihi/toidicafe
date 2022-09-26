import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

export  function Profile({}: Props) {
  return (
    <div className="profile-wrapper">
      <Outlet/>
    </div>
  )
}