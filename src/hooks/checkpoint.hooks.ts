import React, { useEffect, useState } from 'react'
type Props = {}

export function UseCheckpoint({ }: Props) {
  const [deviceCurrent,setDeviceCurrent] = useState(window.innerWidth <= 989?'mobile':window.innerWidth >= 1280?'desktop':'tablet')
  useEffect(() => {
    let checkpoint = () => {
      setDeviceCurrent((window.innerWidth <= 989?'mobile':window.innerWidth >= 1280?'desktop':'tablet'))
    }
    window.addEventListener('resize', checkpoint)
    return ()=> window.removeEventListener('resize',checkpoint)
  })
  return { deviceCurrent }
}