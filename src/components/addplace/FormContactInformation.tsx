import React from 'react'
import { Field, FormikErrors, FormikTouched } from 'formik'
import '../../styles/form-contact-information.scss'

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

export default function FormcontacttInformation({errors,touched }: Props) {
  return (
    <div className='form-contact-information-wrapper'>
      {
        arrField.map(({ name, placeholder, label }, index) => 
        { let wrong = (name == 'email' || name == 'phone') && errors[`${name == 'email' ? 'email' : 'phone'}`] &&
          touched[`${name == 'email' ? 'email' : 'phone'}`] 
          return (
          <div className='form-contact-information-row' key={index}>
          <label className= {'form-label-contact-info'} htmlFor={name}>{label}:</label>
          <div className="form-contact-container-input">
           <Field className={'form-input-contact-info'.concat(wrong?' error':'')} name={name} placeholder={placeholder} />
          { wrong &&
          <span className={'form-error-message-contact-info'}>{errors[`${name == 'email' ? 'email' : 'phone'}`]}</span>}
          </div>
          </div>
          )
        }
       ) 
      }
    </div>
  )
}