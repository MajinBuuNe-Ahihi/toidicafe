import React, { useEffect, useState } from 'react'
import '../../styles/switch-button.scss'
type Props = {
  state: React.Dispatch<React.SetStateAction<boolean>>,
  className?: string
}

export function SwitchButton({state,className}: Props) {

  const [switchbtn, setSwitchbtn] = useState<boolean>(false);
  useEffect(() => {
    state(switchbtn)
  },[switchbtn])

  return (
    <div className={`swicth-button-wrapper ${switchbtn && 'active'} ${className}`}>
      <span className='switch-button-point' onClick={()=>setSwitchbtn(pre => !pre)}>
      </span>
    </div>
  )
}