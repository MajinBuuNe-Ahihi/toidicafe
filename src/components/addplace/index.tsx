import React from 'react'
import { toast } from 'react-toastify'
import { Button,AiOutlinePlus } from '../common'
import '../../styles/add-place.scss'
import { Formik,Form,Field} from 'formik'
import * as Yup from 'yup'
import FormInfomationBasic from './FormInfomationBasic'
type Props = {}
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
 });
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
        <Formik
        initialValues={{
          name: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
        >
          {({ errors, touched }) => (
            <Form className='form-add-place'>
            <div className='add-place-name-section'>Thông tin cơ bản</div>
            <hr /> 
              <FormInfomationBasic errors={errors} touched={touched} />
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
            </Form>
          )}
          </Formik>
      </div>
    </div>
  )
}