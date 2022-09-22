import { ReactElement } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { UseCheckpoint } from '../../hooks';
import 'swiper/css';
import '../../styles/slide.scss';
import CardItem from './CardItem';
type Props = {
  card: {children: ReactElement,image: {src: string, alt: string}}[]
}
export default function HomeSlide({ card }: Props) {
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
          <CardItem image={item.image} children={item.children} />
        </SwiperSlide>
       )
      }
    </Swiper>
  )
}