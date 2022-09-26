import { Field, FormikErrors, FormikTouched } from 'formik'
import React from 'react'
import { SwitchButton } from '../common'

type Props = {
  errors: FormikErrors <{
    name: string,
    area: string,
    address: string,
    direct: string,
    info: string,
  }>,
  touched: FormikTouched<{
    name: string,
    area: string,
    address: string,
    direct: string,
    info: string,
}>

}

export default function FormInfomationBasic({errors, touched}: Props) {
  return (
    <div className='form-information-basic-container'>
      <label htmlFor='name'>Tên quán <span>*</span></label>
      <Field name='name' />
      {errors.name && touched.name ? (
        <span className='error-message'>{errors.name}</span>
      ) : null}
      <label htmlFor='area'>Khu vực <span>*</span></label>
      <Field name='area' />
      {errors.area && touched.area ? (
        <span className='error-message'>{errors.area}</span>
      ) : null}
      <label htmlFor='address'>Địa chỉ <span>*</span></label>
      <Field name='address' />
      {errors.address && touched.address ? (
        <span className='error-message'>{errors.address}</span>
      ) : null}
      <label htmlFor='direct'>Chỉ đường <span>*</span></label>
      <Field name='direct' />
      {errors.direct && touched.direct ? (
        <span className='error-message'>{errors.direct}</span>
      ) : null}
      <label htmlFor='info'>Giới thiệu <span>*</span></label>
      <Field name='info' />
      {errors.info && touched.info? (
        <span className='error-message'>{errors.info}</span>
      ) : null}
      <SwitchButton/>
     
    </div>
  )
}