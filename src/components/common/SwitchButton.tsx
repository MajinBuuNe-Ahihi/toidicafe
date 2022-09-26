import React, { useState } from 'react'
import '../../styles/switch-button.scss'
type Props = {}

export function SwitchButton({ }: Props) {

  const [switchbtn, setSwitchbtn] = useState<boolean>(false);


  return (
    <div className={`swicth-button-wrapper ${switchbtn && 'active'}`}>
      <span className='switch-button-point' onClick={()=>setSwitchbtn(pre => !pre)}>
      </span>
    </div>
  )
}