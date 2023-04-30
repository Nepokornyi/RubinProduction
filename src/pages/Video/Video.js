import React, { useState, useEffect } from 'react'

import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import Frame from '../../components/Frame/Frame'
import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'

import ShowReel from '../../assets/video/ShowReel.mp4'
import AdsReel from '../../assets/video/AdsReel.mp4'
import LazyVideo from '../../components/LazyHash/LazyVideo'


const useStyle = createUseStyles({
    videoContainer:{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        boxSizing: 'border-box',
        paddingTop: '65px',
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

    const [played, setPlayed] = useState(false);
    const [hideFrame, setHideFrame] = useState(false);

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
            <Content>
                <Header ads={ads} />
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration:3, ease: 'easeOut'}}
                    id="Video" 
                    className={style.videoContainer}
                    onClick={handlePlayPause}
                >
                    <LazyVideo src={ads ? AdsReel : ShowReel} blurHash='L02i62M,O9k6P,m@tNSu.5RCtPSJ' className={style.background} id='ShowReel' />
                    {ads ? null : <Frame frameFade={hideFrame && style.frameFadeout} />}
                </motion.div>
            </Content>
        </>
    )
}

export default Video