import { CSSTransition } from 'react-transition-group'
import loginimage from '../../assets/coffee-break.svg'
import { useAppDispatch, useAppSelector, useCheckpoint } from '../../hooks'
import { overlay } from '../../sliceredux'
import FormLogin from './FormLogin'
import { FaTimes } from '../common'
import '../../styles/login.scss'

type Props = {}


export default function Login({ }: Props) {
  const { value} = useAppSelector(state => state.trigger);
  const { deviceCurrent } = useCheckpoint('');
  const dispatch = useAppDispatch();

  return (
    <>
      {
    (value == 9) ?
    ((deviceCurrent === 'moblie')?
    <CSSTransition
      in={true}
      timeout={500}
      unmountOnExit
      classNames={'login-mobile'}>
        <div className="login">
          <div className="login__close">
            <FaTimes size={25} className="login__icon" onClick={() =>  dispatch(overlay())} />
          </div>
          <FormLogin></FormLogin>
          <div className="login__image" style={{ backgroundImage: `url(${loginimage})`}} >
          </div>
        </div>
    </CSSTransition>
      :
    <div className="login">
      <div className="login__close">
        <FaTimes size={25} className="login__icon" onClick={() =>  dispatch(overlay())} />
      </div>
      <FormLogin></FormLogin>
      <div className="login__image" style={{ backgroundImage: `url(${loginimage})`}} >
      </div>
      </div>)
      : null
    }
    </>
  )
}