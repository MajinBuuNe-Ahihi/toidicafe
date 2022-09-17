import React, { useState } from 'react'
import { Link, useLocation} from 'react-router-dom'
import * as ICON from './Icon'
import { Button } from './Button'
import { Notification } from '../'
import { UserHeader } from '../userdropdown'
import HeaderEXPRO from '../expore-promo-header/HeaderEXPRO'
import { SearchComponent } from '../search'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { sidebar,searchmobile } from '../../sliceredux'
import logo from '../../assets/logo.svg'
import bookmark from '../../assets/bookmark2.svg'
import '../../styles/header.scss'

type Props = {}

export const Header = (props: Props) => {
  const url = useLocation()
  const [triggerOpenModal, setTriggerOpenModal] = useState<number>(useAppSelector((state)=> state.trigger.value)) // create a trigger check only a modal show when click dropdown
  const dispatch = useAppDispatch()
  const handleChangeKeyTrigger = (key: number) => {
    setTriggerOpenModal(key);
  }

  return (
    <>
    <div className='header'> 
      <div className= {'header-container'}>
        <div className={'header-container__left'}>
          <div className= {'header-logo'}>
          <Link to={'/'}>
          <img src={logo} alt='' className={'header-logo__image'} /> 
          </Link>
          </div>
        </div>
        <div className={'header-container__right'}>
          <div className='header-container-right-1'>
            {
              url.pathname !== '/' && <SearchComponent trigger={triggerOpenModal} setTrigger={handleChangeKeyTrigger} type='header-search' placeholder='tim kiem quan cafe' currentPath={url.pathname} />  
            }
            <HeaderEXPRO trigger={triggerOpenModal} setTrigger={handleChangeKeyTrigger} />  
          </div>
          <div className='header-container-right-2'>    
            <div className={'header-button-write-preview'}>
              <Link className= {'header-button-write-preview-container'} to={'/preview'}>
                <Button bg={1} type={1} padding={'10px 12px'}>
                  <>
                  <span> 
                  <ICON.BsPencilSquare size={25}/>
                  </span>
                  <span>
                    Viet review
                  </span>
                  </>
                </Button>
              </Link>
            </div>
            <div className={'header-login'}>
              {
                false ?
                  <div className={'header-login-button'}>
                    <Button type={1} bg={2} padding={'10px 12px'}>
                      <span>
                        Dang nhap
                      </span>
                  </Button>
                  </div>
                  :
                  <div className='header-feature-loggined'>
                      <div className='header-location-saved-button'>
                        <Link to={'/save'}>
                          <img src={bookmark} alt='book mark' className='header-location-saved-button__image' />
                        </Link>
                      </div>
                      <Notification trigger={triggerOpenModal} setTrigger={handleChangeKeyTrigger}/>
                      <UserHeader trigger={triggerOpenModal} setTrigger={handleChangeKeyTrigger}/>
                  </div>
              }
              </div>
            {
               url.pathname == '/' ? 
              <div className='header-near-place-button'>
                <Link to={'/near-you'}>
                  <span>
                    <ICON.HiLocationMarker size={25}/>
                  </span>
                </Link>
              </div>:
              <div className='header-search-button' onClick={() => dispatch(searchmobile())}>
                <span>
                  <ICON.BiSearch size={25}/>
                </span>
              </div>
            }
            <div className='header-more-feature-button' onClick={()=>dispatch(sidebar())}>
                <span>
                  <ICON.HiViewGrid size={25}/>
                </span>
            </div>  
          </div>
        </div>
      </div>
    </div>
    </>
  )
}