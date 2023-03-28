import React from 'react'

import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import Frame from '../../components/Frame/Frame'
import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'
import { container, item } from '../../libs/animation'

import VideoWide from '../../assets/video/motion.mp4'


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
  },
  headerText:{
    margin:'0px', 
    fontSize: '54px',
    '@media(max-width: 900px)':{
      fontSize: '41px',
    },
    '@media(max-width: 600px)':{
      fontSize: '26px',
    }
  },
  subheaderText:{
    margin:'0px', 
    fontSize: '42px',
    '@media(max-width: 900px)':{
      fontSize: '30px',
    },
    '@media(max-width: 600px)':{
      fontSize: '21px',
    }
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
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:3, ease: 'easeOut'}}
            id="Video" 
            className={style.videoContainer}
        >
            <div className={style.header}>
                <h1 className={style.headerText}>NIKITA RUBIN</h1>
                <h1 className={style.subheaderText}>Content Creator</h1>
            </div>

            <video autoPlay loop muted className={style.background}>
                <source src={VideoWide} type="video/mp4" />
            </video>
            <Frame />
        </motion.div>
        </Content>
    </>
  )
}

export default Video