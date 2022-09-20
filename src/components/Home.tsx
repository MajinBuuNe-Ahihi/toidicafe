import React, { ElementRef, useEffect, useRef } from 'react'
import BannerHome from './bannerhome';
import Video from './common/Video';
import '../styles/home-banner.scss'
import HomeSection from './homesection';
import HomeSlide from './homesection/HomeSlide';

type Props = {}
export function Home({ }: Props) {
  
  
  return (
    <div className="home-section">
      <BannerHome />
      <HomeSection subclass='HII' title='Mục đích bạn cần ?' children={<HomeSlide/>} />
    </div>
  )
}