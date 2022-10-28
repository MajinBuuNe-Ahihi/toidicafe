import React, { useEffect, useState } from 'react'
import { Field , FormikErrors, FormikTouched } from 'formik'
import { SwitchButton } from '../common'
import '../../styles/form-information-basic.scss'

type Props = {
  errors: FormikErrors<{
    name: string,
    area: string,
    address: string,
    direct: string,
    info: string,
    owner: string
  }>,
  touched: FormikTouched<{
    name: string,
    area: string,
    address: string,
    direct: string,
    info: string,
    owner: string
  }>,
  handleChange:  {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
}
}

export default function FormInfomationBasic({ errors, touched, handleChange }: Props) {
  const [ownerState, setOwnerState] = useState<boolean>(false)

  useEffect(() => {
    let input = document.getElementById('owner-input') as HTMLInputElement
    input.addEventListener('changee', (e:Event) => handleChange(e) )
    let e = new Event('changee')
    input.dispatchEvent(e)
    return () => {
      input.removeEventListener('changee', (e:Event) => handleChange(e))
    }
  },[ownerState])

  return (
    <div className='form-information-basic'>
      <label className='form-label form-label-1' htmlFor='name'>Tên quán <span>*</span></label>
      <Field className={'form-input form-input-1'.concat(errors.name && touched.name ?' error':'')} name='name' placeholder="Nhap ten quan"/>
      {errors.name && touched.name ? (
        <span className='form-error-message form-error-message-1'>{errors.name}</span>
      ) : null}
      <label className='form-label form-label-2' htmlFor='area'>Khu vực <span>*</span></label>
      <Field className ={'form-input form-input-2'.concat(errors.area && touched.area ?' error':'')} name='area' placeholder="Chon 1 quan"/>
      {errors.area && touched.area ? (
        <span className='form-error-message form-error-message-2'>{errors.area}</span>
      ) : null}
      <label className='form-label form-label-3' htmlFor='address'>Địa chỉ <span>*</span></label>
      <Field className ={'form-input form-input-3'.concat(errors.address && touched.address ?' error':'')} name='address' placeholder="Nhap dia chi cu the"/>
      {errors.address && touched.address ? (
        <span className='form-error-message form-error-message-3'>{errors.address}</span>
      ) : null}
      <label className='form-label form-label-4' htmlFor='direct'>Chỉ đường:</label>
      <Field className ='form-input form-input-4' name='direct' placeholder="Nhap chi duong chi tiet neu co the"/>
      {errors.direct && touched.direct ? (
        <span className='form-error-message form-error-message-4'>{errors.direct}</span>
      ) : null}
      <label className='form-label form-label-5' htmlFor='info'>Giới thiệu:</label>
      <Field className ='form-input form-input-5 form-input-textarea' name='info' as='textarea' placeholder="Nhap gioi thieu ve quan"/>
      {errors.info && touched.info? (
        <span className='form-error-message form-error-message-5'>{errors.info}</span>
      ) : null}
      <label className='form-label form-label-6' htmlFor='owner1'>Bạn là chủ quán:</label>
      <input type={'hidden'} name='owner' value={ownerState.toString()} id='owner-input'/>
      <label className ='form-input-6'  htmlFor='owner'> <SwitchButton state={setOwnerState}/> </label>
    </div>
  )
}