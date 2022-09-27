import { Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import '../../styles/add-place.scss'
import { AiOutlinePlus, Button } from '../common'
import FormContactInformation from './FormContactInformation'
import FormInfomationBasic from './FormInfomationBasic'

type Props = {}
const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  area: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  direct: Yup.string(),
  info: Yup.string(),
  owner: Yup.string(),
  phone: Yup.string().min(10, 'invalid numberphone'),
  email: Yup.string().email('invalid email'),
 });
export function AddPlace({ }: Props) {
  
  const showToast = () => {
    toast.success('🦄 Wow so easy!', {
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
          area: '',
          address: '',
          direct: '',
          info: '',
          owner: 'false',
          phone: '',
          email: '',
          facebook_url: '',
          instagram_url: '',
          website: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values, Boolean(values.owner));
          showToast()
        }}
        >
          {({ errors, touched,handleChange}) => (
            <Form className='form-add-place'>
            <div className='add-place-name-section'>Thông tin cơ bản</div>
            <hr /> 
              <FormInfomationBasic  handleChange={handleChange} errors={errors} touched={touched} />
            <div className='add-place-name-section'>Thông tin khác</div>
            <hr />
            <div className='add-place-name-section'>Thông tin liên hệ</div>
              <hr />
              <FormContactInformation errors={errors} touched={touched} />
            <div className='add-place-name-section'>Hình ảnh</div>
            <hr />
            <div className='add-place-name-section'>Menu</div>
            <hr />
            <Button typefunc={{type:'submit'}} className='add-place-button' type={2} bg={1} children={<span className='add-place-button-container'>
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