import React, { ElementRef, useEffect, useRef } from 'react'
import BannerHome from './bannerhome';
import Video from './common/Video';
import '../styles/home-banner.scss'

type Props = {}
export function Home({ }: Props) {
  
  
  return (
    <div className="home-section">
      <BannerHome/>
    </div>
  )
}