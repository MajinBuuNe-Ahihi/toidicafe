import React from 'react'
import CardItem from './CardItem';
import '../../styles/home.scss'

type Props = {}
const card2 = [{
  children: <>
    <h1>Tay Ho</h1>
    <span>41 quan cafe</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/region/tay-ho-1647433156043.jpeg?w=960',
    alt: "text"
  }
  },
  {
  children: <>
    <h1>Ba Dinh</h1>
    <span>77 quan cafe</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/region/ba-dinh-1647433057947.jpeg',
    alt: "text"
  }
  },
  {
  children: <>
    <h1>Hoan Kiem</h1>
    <span>101 quan cafe</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/region/hoan-kiem-1647433147220.jpeg',
    alt: "text"
  }
  },
  {
  children:<>
    <h1>Dong Da</h1>
    <span>82 quan cafe</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/region/dong-da-1647433142184.jpeg',
    alt: "text"
  }
  },
  {
  children:<>
    <h1>Cau Giay</h1>
    <span>31 quan cafe</span>
  </>,
  image: {
    src: 'https://toidicafe.vn/static/images/region/cau-giay-1647433134263.jpeg?w=960',
    alt: "text"
  }
  }
]
function ListItemFamous({}: Props) {
  return (
    <div className='famous-destionation-wrapper'>
      { 
        card2.map(item =>
        <CardItem image={item.image} children={item.children} type={'famous'} />
        )
      }
    </div>
  )
}

export default ListItemFamous