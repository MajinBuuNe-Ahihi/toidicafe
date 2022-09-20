import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { HandleVideo } from '../../types'
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
      <source src={'https://res.cloudinary.com/hauimanhneahihi/video/upload/v1663579636/5_lesser-known_cafes_in_Hanoi_for_first-time_visitors___Exotic_Voyages_fkqgvc.mp4#t=13,147'} type="video/mp4"/>
  </video>
  )
}

export default forwardRef(Video)
