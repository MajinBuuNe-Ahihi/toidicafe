import React from 'react'
import { Link } from 'react-router-dom'
import * as ICON from './Icon'
import '../../styles/footer.scss'
import partnericon from '../../assets/partnericons.webp'
import logo from '../../assets/logo.svg'
import carton from '../../assets/cartonfooter.png'
import { Social } from './Social'


type Props = {}

export function Footer({ }: Props) {

  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-container'>
          <div className='footer-carton'>
            <img src={carton} alt='' className='footer-carton__image' />
          </div>
          <div className='footer-top-container__col3'>
            <div className='footer-top__footer-logo'>
               <img src={logo} alt='toificafe' className='footer-top__footer-logo__image' />
            </div>
            <div className='footer-top__footer-partner'>
              <Link to = {'contact'} className='footer-top-footer-partner-button'>
                <img src={partnericon} alt='tro thanh doi tac' />
                <span>Hop tac voi chung toi</span>
              </Link>
            </div>
          </div>
          <div className='footer-top-container__col3'>
            <h3 className='footer-top__footer-about-us'>
              Ve chung toi
            </h3>
            <ul className='footer-top__footer-list-information'>
              <li className='footer-top__footer-list-information__element'>
                <Link to={'/about'}>Gioi thieu</Link>
               </li>
              <li className='footer-top__footer-list-information__element'>
                <Link to={'/'}>Giai dap thac mac</Link>
               </li>
              <li className='footer-top__footer-list-information__element'>
                <Link to={'/contact'}>Lien he - gop y</Link>
               </li>
              <li className='footer-top__footer-list-information__element'>
                <Link to={'/'}>Dieu khoan su dung</Link>
               </li>
            </ul>
          </div>
          <div className='footer-top-container__col3'>
            <h3 className='footer-top__footer-following-us'>
              Theo doi chung toi tren 
            </h3>
            <ul className='footer-top__footer-list-following-social'>
              <Social/>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
          <span>Ban quyen <ICON.RiCopyrightLine size={25}/> 2022 <strong>ManhNeAhihi</strong></span>
      </div>
    </div>
  )
}