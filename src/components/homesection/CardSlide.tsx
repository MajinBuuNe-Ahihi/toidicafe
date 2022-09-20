import { ReactNode, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import '../../styles/card.scss';

type Props = {
  image: {
    alt: string,
    src: string
  },
  children?: ReactNode
}

export default function CardSlide({ image, children }: Props) {
  const [opacity,setOpacity] = useState<number>(0)
  return (
    <Link to={'/'} className="card-slide-component">
      <span className="card-slide-component-inner">
        {children}
      </span>
      <LazyLoadImage className='card-slide-component-image'
        alt={image.alt}
        src={image.src}
        effect="blur"
        width={'100%'}
        height={'100%'}
        beforeLoad={() => setOpacity(0)}
        afterLoad={() =>setOpacity(1)}
        style={{opacity}}
      />
      {
        opacity == 0 && <SkeletonTheme baseColor="#ffffff" duration={3} highlightColor="#ee0033">
          <Skeleton className='skeleton-card-slide' count={1}/>
          </SkeletonTheme>
      }
    </Link>
  )
}