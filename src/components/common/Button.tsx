import React from 'react'
import classes from '../../styles/button.module.scss';


type Props = {
  children: React.ReactElement;
  type?: number,
  bg?: number,
  padding?:string,
}

export  function Button({children,type,bg,padding}: Props) {
  return (
    <div className={`${classes.button} ${type == 1 ? classes['button--type1'] : classes['button--type2']}
    ${bg == 1 ? classes['button--bg1'] : classes['button--bg2']}
    `} style={{padding:padding}}>
      {children}
    </div>
  )
}