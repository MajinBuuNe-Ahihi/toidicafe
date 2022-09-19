import Typewriter from 'typewriter-effect';
import { useAppSelector, UseCheckpoint } from '../../hooks';
import '../../styles/home-banner.scss';
import { SearchComponent } from '../search';

type Props = {}

export default function TitleAndSearch({ }: Props) {
  const trigger = useAppSelector(state => state.trigger.value);
  const { deviceCurrent } = UseCheckpoint('');
  return (
    <div className='banner-desktop-slogan-search-container' style={trigger==7?{ zIndex: 99999, transform: 'translate(-50%,-100%)'}:{}}>
    <h1 className='banner-desktop-slogan-search-container__slogan'>
        <Typewriter
        options={{
          strings: ['Đi & Khám Phá Điểm Hẹn Hấp Dẫn'],
          autoStart: true,
          loop: true,
        }}
      />
      </h1>
      <h3 className='banner-desktop-slogan-search-container__title'>
       Mang đến cho bạn những sự lựa chọn tốt nhất cho điểm hẹn cafe
      </h3>
      <SearchComponent placeholder='Tim quan, ten quan, kieu quan' type={deviceCurrent == 'mobile'?'home-search-mobile':'home-search'} currentPath={'/'} />
    </div>
  )
}