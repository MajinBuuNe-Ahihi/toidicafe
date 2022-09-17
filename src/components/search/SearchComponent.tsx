import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { Input, BiSearch, AiOutlineLoading3Quarters, FaTimes } from '../common'
import { useAppDispatch, useAppSelector, UseCheckpoint } from '../../hooks'
import SearchResult from './SearchResult';
import { overlay } from '../../sliceredux';
import '../../styles/search.scss'

type Props = {
  type: string, //type class search
  placeholder: string,
  currentPath?: string,
  trigger?: number,
  setTrigger?: (key:number)=>void
}

export function SearchComponent(props: Props) {
  const [value, setValue] = useState<string>('');
  const { deviceCurrent } = UseCheckpoint('');
  const [open, setOpen] = useState<boolean>(false);
  const [isloading, setIsloading] = useState<boolean>(false);
  const triggerSidebar = useAppSelector((state) => state.trigger.value);
  const dispatch = useAppDispatch()

  let onFocusOpenModal = () => {
    setOpen(true);
    if (props.setTrigger != undefined) {
      props.setTrigger(4);
    }
  }

  let outFocusOpenModal = () => setOpen(false)
  
  
  return (
    <>
    { (deviceCurrent != 'mobile' ||  props.type != 'header-search') && // check mobile not show and it must have type search header
      <div className={`${props.type}-wrapper`}>
        <Input type='text' name='search' value={value} onFocus={onFocusOpenModal} onBlur={outFocusOpenModal} className={props.type + '-input'}
            placeholder={props.placeholder} onChange={(e: Event) => { const result = (e.target as HTMLInputElement) ; setValue(result.value || '') }} />
      {
        props?.currentPath === '/' ?
        <div className='search-button-home'>
          <span className='search-button-home__icon'>
            <BiSearch size={25} />
          </span>
          <span className='search-button-home__text'>
            Search
          </span>
        </div> :
              <span className={`${props.type}-icon`}>
          <BiSearch size={20}/>
        </span>
      }
      {  // check value and loading, click time refresh input search
        value ? isloading ?
      <span className='search-loading' > 
        <AiOutlineLoading3Quarters size={25} />
      </span> : triggerSidebar != 6?
      <span className='search-close' onMouseEnter= {() => {
        setValue('')
      }}>
      <FaTimes size={25}/>
      </span> :
      null      
      : null
      }
      <CSSTransition
        in={open && props?.trigger == 4}
        timeout={500}
        unmountOnExit
        classNames='modal-dropdown'
      >
        <SearchResult value={value} />
      </CSSTransition>
      {
        triggerSidebar == 6 &&<>
          <div className='search-cancel-button-sidebar' onClick={()=> dispatch(overlay())}>
          Huy
          </div>
          <SearchResult value={value} />    
        </>
      }
      </div>
      }
    </>
  )
}