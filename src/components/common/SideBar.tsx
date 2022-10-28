import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import * as ICON from '../common'
import { Social } from './Social'
import { Button } from './Button'
import { useAppDispatch } from '../../hooks'
import { overlay } from '../../sliceredux'
import '../../styles/sidebar.scss'
import user from '../../assets/unnamed.jpg'
import level from '../../assets/level.png'


type Props = {}

type Nav = { icon: ReactElement, name: string, link: string, type: number }


let sidebarNav: Nav[] = [{ icon: <ICON.FaUserEdit size={25} />, name: 'chinh sua ho so', link: '/', type: 1 },
  { icon: <ICON.BsBookmarkStarFill size={25} />, name: 'danh sach da luu', link: '/', type: 1 },
  { icon: <ICON.ImHome size={25} />, name: 'trang chu', link: '/', type: 2 },
  { icon: <ICON.AiTwotoneFire size={25} />, name: 'kham pha', link: '/', type: 2 },
  { icon: <ICON.TbDiscount2 size={25} />, name: 'khuyen mai', link: '/promo', type: 2 },
  { icon: <ICON.HiLocationMarker size={25} />, name: 'dia diem moi', link: '/add-place', type: 2 },
  { icon: <ICON.HiOutlineInformationCircle size={25} />, name: 'gioi thieu', link: '/about', type: 3 },
  { icon: <ICON.BiCheckShield size={25} />, name: 'chinh sach va ho tro', link: '/', type: 3 },
  { icon: <ICON.HiOutlineMail size={25} />, name: 'lien he - gop y', link: '/contact', type: 3 }  
]

export default function SideBar({ }: Props) {
  const dispatch = useAppDispatch ()

  return (
    <div className='sidebar__component'>
      <div className='sidebar__container'>
        { true?
          <Link to = {'/account'} className='sidebar__profile-user' onClick={()=>dispatch(overlay())}>
            <img src={user} alt='' className='sidebar__user-image' />
            <span className='siderbar__user-info'>
              <span className='siderbar__user-name'>
                Hoang Van Manh
              </span>
              <img src={level} alt='' className='siderbar__user-level' />
            </span>
          </Link> : 
          <div className='siderbar__login'>
            <Button type={2} bg={1}>
            <span className='siderbar__login-button'>
                Dang Nhap/ Dang ky
            </span>
          </Button>
          </div>
        }
        <div className='sidebar__menu'>
          {
            false && sidebarNav.map((element: Nav,index) => element.type === 1 &&
            <Link key={index} to={element.link} onClick={() => dispatch(overlay())} className='sidebar__menu-element'>
            <span className='sidebar__menu-icon'>
              {element.icon}
            </span>
            <span className='sidebar__menu-name'>{element.name}</span>
            </Link>
            )
          }
          <h3 className='sidebar__menu-section'>
            Toi di cafe
          </h3>
           {
            sidebarNav.map((element: Nav,index) => element.type === 2 &&
              <Link key={index} to={element.link} onClick={() => dispatch(overlay())} className='sidebar__menu-element'>
            <span className='sidebar__menu-icon'>
              {element.icon}
            </span>
            <span className='sidebar__menu-name'>{element.name}</span>
            </Link>
            )
          }
          <h3 className='sidebar__menu-section'>Thong tin</h3>
           {
            sidebarNav.map((element: Nav,index) => element.type === 3 &&
            <Link key={index} to={element.link} onClick={() => dispatch(overlay())} className='sidebar__menu-element'>
            <span className='sidebar__menu-icon'>
              {element.icon}
            </span>
            <span className='sidebar__menu-name'>{element.name}</span>
            </Link>
            )
          }
          <h3 className='sidebar__menu-section'>theo doi chung toi</h3>
          <ul className='sidebar__list-follow-social'>
            <Social/>
          </ul>
          <Button type={2} bg={2}><span className='sidebar__logout'>Dang xuat</span></Button>
        </div>
      </div>
    </div>
  )
}