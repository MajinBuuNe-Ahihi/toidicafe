import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import menu from '../../assets/menu.svg';
import { useCheckpoint } from '../../hooks';
import '../../styles/header.scss';
import * as ICON from '../common';

type Props = {
  trigger: number,
  setTrigger: (key:number)=>void
}

export default function HeaderEXPRO({ trigger,setTrigger}: Props) {
  const { deviceCurrent } = useCheckpoint('');
  const [open, setOpen] = useState<boolean>(false); 

  let openDropDown = () => {
    setOpen(pre => !pre)
    setTrigger(1)
  }
  useEffect(() => {
    setOpen(false)
  }, [deviceCurrent])
  
  return (
    <>
      {deviceCurrent !== 'tablet' ? 
      <>
      <div className={'header-explore'}>    
      <Link to={'/explore'} >
        <span className={'header-explore__icon'}>
          <ICON.FaSlackHash size={25}/>
        </span>
        <span className={'header-explore__text'}>
          Kham pha
        </span>
        </Link>
      </div>
      <div className={'header-discount'}>
        <Link to={'/promo'} >
          <span className={'header-discount__icon'}>
            <ICON.TbDiscount2 size={25}/>
          </span>
          <span className={'header-discount__text'}>
            Khuyen mai
          </span>
        </Link>
      </div>
    </> :
    <div className='header-menu'>
      <div className='header-menu-button' onClick={() => openDropDown()}>
        <img src={menu} alt='' className='header-menu-button__image' />
      </div> 
      <CSSTransition
        in={open && trigger == 1}
        timeout={300}
        unmountOnExit
        classNames='modal-dropdown'
      >
      <div className='header-menu-dropdown'>
        <div className={'header-menu-dropdown-explore'}>
          <Link to={'/explore'} >
            <span className={'header-menu-dropdown-explore__icon'}>
              <ICON.FaSlackHash size={18}/>
            </span>
            <span className={'header-menu-dropdown-explore__text'}>
              Kham pha
            </span>
          </Link>
        </div>
        <div className={'header-menu-dropdown-discount'}>
          <Link to={'/discount'} >
            <span className={'header-menu-dropdown-discount__icon'}>
              <ICON.TbDiscount2 size={18}/>
            </span>
            <span className={'header-menu-dropdown-discount__text'}>
              Khuyen mai
            </span>
          </Link>
        </div>
      </div>
      </CSSTransition>

          
    </div>    
        
    }
    </>
  )
}