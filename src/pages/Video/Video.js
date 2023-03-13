import React from 'react'

import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'

import { createUseStyles } from 'react-jss'
import { useMediaQuery } from 'react-responsive'

import {ReactComponent as MobileFramePicture } from '../../assets/img/mobileFramePicture.svg'
import {ReactComponent as TabletFramePicture } from '../../assets/img/tabletFramePicture.svg'
import {ReactComponent as WideFramePicture } from '../../assets/img/wideFramePicture.svg'
import bgImg from '../../assets/img/bgImg.png'
import wideBgImg from '../../assets/img/wideBgImg.png'


const useStyle = createUseStyles({
  videoContainer:{
    position: 'relative',
    width: '100%'
  },
  header: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1'
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
    height: '100vh',
    objectFit: 'cover'
  }
})

function Video() {

  const style = useStyle()

  const isMobile = useMediaQuery({query: '(max-width:500px)'});
  const isTablet = useMediaQuery({query: '(min-width:501px) and (max-width:900px)'});
  const isLaptop = useMediaQuery({query: '(min-width:901px)'});


  return (
    <>
      <Content>
        <Header />
        <div id="Video" className={style.videoContainer}>
          <div className={style.header}>
            <h1 style={{margin:'0px', fontSize: '54px'}}>NIKITA RUBIN</h1>
            <h1 style={{margin:'0px', fontSize: '42px'}}>Content Creator</h1>
          </div>

          {isMobile === true ? <img src={bgImg} className={style.background} alt="" /> : <img src={wideBgImg} className={style.background} alt="" />}
          <div className={style.frameContainer}>
            {isMobile && <MobileFramePicture className={style.frame} />}
            {isTablet && <TabletFramePicture className={style.frame} />}
            {isLaptop && <WideFramePicture className={style.frame} />}
          </div>
        </div>
      </Content>
    </>
  )
}

export default Video