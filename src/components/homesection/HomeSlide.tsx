import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import '../../styles/slide.scss'
import CardSlide from './CardSlide';
import { UseCheckpoint } from '../../hooks';
type Props = {}

const card = [{
  children: <h1>Lam viec</h1>,
  image: {
    src: 'https://toidicafe.vn/static/images/purpose/lam-viec-1647441292275.jpeg?w=960',
    alt: "text"
  }
  },
  {
  children: <h1>hen ho</h1>,
  image: {
    src: 'https://toidicafe.vn/static/images/purpose/hen-ho-1647441284779.jpeg',
    alt: "text"
  }
  },
  {
  children: <h1>doc sach</h1>,
  image: {
    src: 'https://toidicafe.vn/static/images/purpose/doc-sach-1647441276414.jpeg',
    alt: "text"
  }
  },
  {
  children: <h1>chill</h1>,
  image: {
    src: 'https://toidicafe.vn/static/images/purpose/chill-1647441264959.jpeg?w=960',
    alt: "text"
  }
  },
  {
  children: <h1>song ao</h1>,
  image: {
    src: 'https://toidicafe.vn/static/images/purpose/song-ao-1647441301274.jpeg?w=960',
    alt: "text"
  }
  }
]

export default function HomeSlide({ }: Props) {
  const { deviceCurrent } = UseCheckpoint('');
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={deviceCurrent == 'mobile'?1:deviceCurrent=='tablet'?2:3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {
        card.map((item,index) =>
        <SwiperSlide key={index}>
              <CardSlide image={item.image} children={item.children} />
        </SwiperSlide>
       )
      }
    </Swiper>
  )
}