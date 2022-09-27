import React from 'react'
import { Field, FormikErrors, FormikTouched } from 'formik'
import '../../styles/form-contac-information.scss'

type Props = {
  errors: FormikErrors<{
    phone: string,
    email: string
  }>,
  touched: FormikTouched<{
    phone: string,
    email: string
  }>
}

let arrField = [{ name: 'phone', label: 'Điện thoại', placeholder: 'Nhap so dien thoai' },
  { name: 'email', label: 'Email', placeholder: 'Nhap dia chi email' },
  { name: 'facebook_url', label: 'Facebook', placeholder: 'Nhap link facebook' },
  { name: 'instagram_url', label: 'Instagram', placeholder: 'Nhap link instagram' },
  { name: 'website', label:'Website',placeholder: 'Nhap link website'}]

export default function FormContactInformation({errors,touched }: Props) {
  return (
    <div className='form-contac-information-wrapper'>
      {
        arrField.map(({ name, placeholder, label }, index) => 
        { let wrong = (name == 'email' || name == 'phone') && errors[`${name == 'email' ? 'email' : 'phone'}`] &&
          touched[`${name == 'email' ? 'email' : 'phone'}`] 
          return (
          <div className='form-contac-information-row' key={index}>{}
          <label className= {'form-label-contac-info'} htmlFor={name}>{label}:</label>
          <Field className={'form-input-contac-info'.concat(wrong?' error':'')} name={name} placeholder={placeholder} />
          { wrong &&
          <span className={'form-error-message-contac-info'}>{errors[`${name == 'email' ? 'email' : 'phone'}`]}</span>}
          </div>
          )
        }
       ) 
      }
    </div>
  )
}