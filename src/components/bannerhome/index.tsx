import React, { useRef } from 'react'
import Video from '../common/Video'
import BannerDesktop from './BannerDesktop'
import '../../styles/home-banner.scss'
import { UseCheckpoint } from '../../hooks'
import BannerMobile from './BannerMobile'

type Props = {}

export default function BannerHome({ }: Props) {
  const { deviceCurrent } = UseCheckpoint('');
  return (
    <>
    {
      deviceCurrent == 'mobile'?<BannerMobile/>:<BannerDesktop/>
    }
    </>
  )
}