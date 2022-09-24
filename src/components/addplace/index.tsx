import React from 'react'
import { toast } from 'react-toastify'
import { Button,AiOutlinePlus } from '../common'
import '../../styles/add-place.scss'
type Props = {}

export function AddPlace({ }: Props) {
  
  const showToast = () => {
    toast.error('🦄 Wow so easy!', {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  }

  return (
    <div className='add-place-wrapper'>
      <div className='add-place-container'>
        <div className='add-place-header'>
          <div className='add-place-header__heading'>
          Thêm địa điểm
          </div>
          <div className='add-place-header__text'>
          Những quán cafe yêu thích của bạn chưa có trên Toidicafe.vn? Chia sẻ với cộng đồng ngay!
          </div>
        </div>
        <div className='add-place-name-section'>Thông tin cơ bản</div>
        <hr />
        <div className='add-place-name-section'>Thông tin khác</div>
        <hr />
        <div className='add-place-name-section'>Thông tin liên hệ</div>
        <hr />
        <div className='add-place-name-section'>Hình ảnh</div>
        <hr />
        <div className='add-place-name-section'>Menu</div>
        <hr />
        <Button onClick={()=>showToast()} className='add-place-button' type={2} bg={1} children={<span className='add-place-button-container'>
          <AiOutlinePlus size={25} />
          <span>
            Them dia chi
          </span>
        </span>}
        />
      </div>
    </div>
  )
}