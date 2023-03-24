import React, {useState} from 'react'

import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import Frame from '../../components/Frame/Frame'
import { createUseStyles } from 'react-jss'

import VideoWide from '../../assets/video/motion.mp4'
// import VideoVertical from '../../assets/video/instagram.mp4'


const useStyle = createUseStyles({
  videoContainer:{
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  },
  header: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    opacity: 0.6
  },
  frameContainer: {
    width: '95vw',
    height: '80vh',
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%, -80%)',
    zIndex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  frame: {
    width: '100%',
    height: '100%'
  },
  background: {
    width: '100%',
    height: '92vh',
    objectFit: 'cover',
    objectPosition: 'center',
  }
})

function Video() {


  const style = useStyle()


  return (
    <>
      <Content>
        <Header />
        <div id="Video" className={style.videoContainer}>
          <div className={style.header}>
            <h1 style={{margin:'0px', fontSize: '54px'}}>NIKITA RUBIN</h1>
            <h1 style={{margin:'0px', fontSize: '42px'}}>Content Creator</h1>
          </div>

          <video autoPlay loop muted className={style.background}>
            <source src={VideoWide} type="video/mp4" />
          </video>
          <Frame />
        </div>
      </Content>
    </>
  )
}

export default Video