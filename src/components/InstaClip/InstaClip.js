/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react'

import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'
import TextMotion from '../TextMotion/TextMotion'
import 'react-html5video/dist/styles.css';

import instagramVideo from '../../assets/video/instagramAlt.mp4'
import LazyVideo from '../LazyHash/LazyVideo'


const useStyle = createUseStyles({
    videoContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
    },

        instagramContainer:{
            width: '80%',
            height: '75%',
            color: 'white',
            position: 'relative',
        },
        instagramHeader: {
            width: '100%',
            height: '20%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
        },
        instagramVideo: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',

        },
    video: {
        minWidth: '200px',
        height: '100%',
        objectFit: 'contain',
    },
})

function InstaClip() {

    const style = useStyle()

    const [played, setPlayed] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        const video = document.getElementById('instagramVideo')
        const videoTop = video.getBoundingClientRect().top;
        const videoBottom = video.getBoundingClientRect().bottom;

        if(videoTop < window.innerHeight && videoBottom > 0 && !played) {
            video.play();
            setPlayed(true);
        }
        else{
            video.pause()
        }
    }
    const clickPause = () => {
        const video = document.getElementById('instagramVideo');
        if(played && video.muted === true){
            video.muted = false;
            video.play();
        }
        else{
            video.muted = true;
            video.play();
        }
    }

  return (
    <div className={style.videoContainer}>
        <TextMotion></TextMotion>
        <div className={style.instagramContainer}>
            <div className={style.instagramVideo} >
                <LazyVideo src={instagramVideo} blurHash='L6FPESI9ERIT~WkE9ER%01RlxZs.' className={style.video} id='instagramVideo' customPlayer={true} onPlayPauseClick={clickPause} />
            </div>

        </div>
    </div>
  )
}

export default InstaClip