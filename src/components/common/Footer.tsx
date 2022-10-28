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
      <div className='footer__top'>
        <div className='footer__top-container'>
          <div className='footer-carton'>
            <img src={carton} alt='' className='footer-carton__image' />
          </div>
          <div className='footer__top-col3'>
            <div className='footer__top-logo'>
               <img src={logo} alt='toificafe' className='footer__top-logo__image' />
            </div>
            <div className='footer__top-partner'>
              <Link to = {'/contact'} className='footer__top-footer-partner-button'>
                <img src={partnericon} alt='tro thanh doi tac' />
                <span>Hop tac voi chung toi</span>
              </Link>
            </div>
          </div>
          <div className='footer__top-col3'>
            <h3 className='footer__top-about'>
              Ve chung toi
            </h3>
            <ul className='footer__top-info'>
              <li className='footer__top-info-element'>
                <Link to={'/about'}>Gioi thieu</Link>
               </li>
              <li className='footer__top-info-element'>
                <Link to={'/'}>Giai dap thac mac</Link>
               </li>
              <li className='footer__top-info-element'>
                <Link to={'/contact'}>Lien he - gop y</Link>
               </li>
              <li className='footer__top-info-element'>
                <Link to={'/'}>Dieu khoan su dung</Link>
               </li>
            </ul>
          </div>
          <div className='footer__top-col3'>
            <h3 className='footer__top-follow-us'>
              Theo doi chung toi tren 
            </h3>
            <ul className='footer__top-follow-social'>
              <Social/>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer__copyright'>
          <span>Ban quyen <ICON.RiCopyrightLine size={25}/> 2022 <strong>ManhNeAhihi</strong></span>
      </div>
    </div>
  )
}