import React from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks'
import {overlay} from '../../sliceredux'
type Props = {}

export function Overlay({ }: Props) {
  const trigger = useAppSelector((state) => state.trigger.value)
  const dispatch = useAppDispatch()
  return (
    <>
    {
    (trigger == 5 || trigger == 6)&&<div id='overlay-component' onClick={()=>dispatch(overlay())}>

    </div>
    }
    </>
  )
}