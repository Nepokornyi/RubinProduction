import React from 'react'

import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import Frame from '../../components/Frame/Frame'
import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'

import VideoWide from '../../assets/video/motion.mp4'


const useStyle = createUseStyles({
  videoContainer:{
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
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