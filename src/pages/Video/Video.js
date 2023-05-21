import React, { useState, useEffect } from 'react'

import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import Frame from '../../components/Frame/Frame'
import { createUseStyles } from 'react-jss'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'

import ShowReel from '../../assets/video/ShowReel.mp4'
import AdsReel from '../../assets/video/AdsReel.mp4'
import LazyVideo from '../../components/LazyHash/LazyVideo'
import Equalizer from '../../components/Equalizer/Equalizer'

const useStyle = createUseStyles({
    adaptiveDesign:{
        justifyContent: 'flex-end'
    },
    videoContainer:{
        position: 'relative',
        width: '100%',
        height: 'calc(100% - 65px)',
    },
    videoOverlay:{
        position: 'absolute',
        top: 0,
        left: 0, 
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        zIndex: 4,
        backgroundColor: 'transparent',
        transition: 'background-color 500ms ease',
        cursor: 'pointer'
    },
    activeOverlayDesktop:{
        '&:hover':{
            backgroundColor: 'rgba(0,0,0,0.5)',
            '& $volumeIcon':{
                opacity: 1,
            }
        }
    },
    activeOverlayMobile:{
        '& $volumeIcon':{
            opacity: 1
        }
    },
    volumeIcon:{
        marginBottom: '30px',
        cursor: 'pointer',
        opacity: 0,
        transition: 'opacity 500ms ease',
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
    },
    frameFadeout:{
        opacity: 0,
        transitionDuration: '350ms'
    }
})

function Video({ ads }) {

    const style = useStyle()

    const isDesktop = useMediaQuery({query: '(min-width:900px)'});

    const [played, setPlayed] = useState(false);
    const [hideFrame, setHideFrame] = useState(false);
    const [videoOverlayActive, setVideoOverlayActive] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        const video = document.getElementById('ShowReel')
        const videoTop = video.getBoundingClientRect().top;
        const videoBottom = video.getBoundingClientRect().bottom;

        if(videoTop < window.innerHeight && videoBottom > 100 && !played) {
            video.play();
            setPlayed(true);
        }
        else{
            video.pause()
        }
    }

    const toggleVideoOverlay = () => {
        setVideoOverlayActive(!videoOverlayActive);
    }

    const handlePlayPause = () => {
        const video = document.getElementById('ShowReel');
        
        if(video.muted === true){
            video.muted = false;
            video.volume = 0.5;
            setHideFrame(true);
        }
        else{
            video.muted = true;
            setHideFrame(false);
        }
    }


    return (
        <>
            <Content className={style.adaptiveDesign}>
                <Header ads={ads} />
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration:3, ease: 'easeOut'}}
                    id="Video" 
                    className={style.videoContainer}
                    onClick={handlePlayPause}
                >
                    <div 
                        className={`${style.videoOverlay} ${isDesktop ? (videoOverlayActive && style.activeOverlayDesktop) : (videoOverlayActive && style.activeOverlayMobile)}`} 
                        onClick={toggleVideoOverlay}>

                        <Equalizer className={style.volumeIcon} />
                    </div>
                    <LazyVideo src={ads ? AdsReel : ShowReel} blurHash='L02i62M,O9k6P,m@tNSu.5RCtPSJ' className={style.background} id='ShowReel' />
                    {ads ? null : <Frame frameFade={hideFrame && style.frameFadeout} />}
                </motion.div>
            </Content>
        </>
    )
}

export default Video