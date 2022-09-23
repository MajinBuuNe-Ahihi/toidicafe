import { ReactNode, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
import '../../styles/card.scss';

type Props = {
  image: {
    alt: string,
    src: string
  },
  children?: ReactNode,
  type?: string
}

export default function CardItem({ image, children,type }: Props) {
  const [opacity,setOpacity] = useState<number>(0)
  return (
    
    <Link to={'/'} className={`card-item-component ${type?'card-item-famous': ''}`}>
      <LazyLoadImage className='card-item-component-image'
        alt={image.alt}
        src={image.src}
        effect='blur'
        width={'100%'}
        height={'100%'}
        beforeLoad={() => setOpacity(0)}
        afterLoad={() =>setOpacity(1)}
        style={{opacity}}
      />
      <span className='card-item-component-inner'>
        {children}
      </span>
      {
        opacity == 0 && <SkeletonTheme baseColor='#ffffff' duration={3} highlightColor='#ee0033'>
          <Skeleton className='skeleton-card-slide' count={1}/>
          </SkeletonTheme>
      }
    </Link>
  )
}