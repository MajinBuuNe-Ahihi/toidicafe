import React from 'react'
import { NotificationDropDownElement } from './NotificationDropDownElement'
import * as ICON from '../common'
import '../../styles/notification.scss'

type Props = {}

export  function NotificationDropDown({}: Props) {
  return (
    <div className="header-notification-drop-down">
      <div className="header-notification-drop-down-header">
        <span className='header-notification-drop-down-header__title' >Thong bao</span>
        <span className='header-notification-drop-down-header__check'>
          <ICON.BsCheckAll size={25}/>
          <span>
            Danh giau da xem
          </span>
        </span>
      </div>
      <div className="header-notification-drop-down__list">
        <NotificationDropDownElement id='12' status={false} time={new Date('2/12/2021')} content="hello" />
      </div>
    </div>
  )
}