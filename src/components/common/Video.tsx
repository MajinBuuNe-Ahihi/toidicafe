import React,{forwardRef,useImperativeHandle, useRef} from 'react'
import { HandleVideo } from '../../types'
import video from '../../assets/videobanner.mp4'
type Props = {}

const Video:React.ForwardRefRenderFunction<HandleVideo,Props> = (props, ref) => {
  const videoref = useRef<HTMLVideoElement>(null)
  useImperativeHandle(ref, () => ({
    play() {
      videoref.current?.play();
    },
    pause() {
      videoref.current?.pause();
    },
    status() {
      return !videoref.current?.paused;
    }
  }))

  return (
  <video className='video-banner' ref={videoref} muted autoPlay={true} loop>
      <source src={video} type="video/mp4"/>
  </video>
  )
}

export default forwardRef(Video)
