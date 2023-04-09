import React, {useState, useEffect} from 'react'

import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import Frame from '../../components/Frame/Frame'
import Overlay from '../../components/Overlay/Overlay'
import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'

import VideoWide from '../../assets/video/motion.webm'
import { useAutoplay } from '../../components/Autoplay/AutoplayContext'
import LazyVideo from '../../components/LazyHash/LazyVideo'


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
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
    },
    vimeo: {
        width: '80vw',
        height: '95vh',
        border: 'none'
    }
})

function Video() {

    const style = useStyle()

    const [overlay, setOverlay] = useState(false)
    const {autoplaySupported, loading} = useAutoplay();

    if(loading){
        return console.log('loading');
    }

    const handleOpenOverlay = () => {setOverlay(true)}
    const handleCloseOverlay = () => {setOverlay(false)}

    return (
        <>
            <Content className={style.gradient}>
            <Header />
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration:3, ease: 'easeOut'}}
                id="Video" 
                className={style.videoContainer}
            >
                <LazyVideo src={VideoWide} blurHash='L02i62M,O9k6P,m@tNSu.5RCtPSJ' className={style.background} onClick={handleOpenOverlay} />
                <Frame />
            </motion.div>
            </Content>

            {overlay &&
                <Overlay onClose={handleCloseOverlay}>
                    <iframe title="Intro" src='https://player.vimeo.com/video/732085536?h=5cb9947eaf&autoplay=1&loop=1&title=0&byline=0&portrait=0&' className={style.vimeo} allow="autoplay; fullscreen; picture-in-picture" />
                </Overlay>
            }
        </>
    )
}

export default Video