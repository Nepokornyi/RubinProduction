/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'

import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'

import Overlay from '../Overlay/Overlay'
import TextMotion from '../TextMotion/TextMotion'
import { DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css';
import { LazyVideo, LazyImage } from 'react-lazy-media'

import instagramVideo from '../../assets/video/instagram.mp4'
import IcoInsta from '../../assets/img/icoInsta.jpeg'
import PlayButton from '../../assets/img/Play.svg'


const useStyle = createUseStyles({
    videoContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

        instagramContainer:{
            width: '75%',
            height: '75%',
            color: 'white',
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
            height: '80%',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            '&:before':{
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(1,1,1,0.50)',
                transitionDuration: '350ms'
            },
            '&:hover':{
                '&:before':{
                    backgroundColor: 'rgba(1,1,1,0.75)',
                    transitionDuration: '350ms'
                },
                '& $hoverSpan':{
                    opacity: 1,
                }
            },
        },
    playButton:{
        position: 'absolute',
        width: '125px',
        height: '125px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundImage: `url(${PlayButton})`,
        backgroundSize: '105px 105px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 4,
        transitionDuration: '350ms',
        '&:hover': {
            backgroundSize: '120px 120px',
            animationDuration: '350ms',
            cursor: 'pointer'
        }
    },
    hoverSpan:{
        position: 'absolute',
        bottom: '25px',
        left: '50%',
        transform: 'translate(-50%)',
        cursor: 'pointer',
        zIndex: 5,
        opacity: 0,
        transition: 'opacity 350ms linear'
    },
    iconContainer:{
        width: '42px',
        height: '42px',
        margin: '0px'
    },
    icon: {
        width: '100%',
        height: '100%',
        borderRadius: '3rem'
    },
    profileDescription: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    nickname: {
        margin: 0,
        cursor: 'pointer'
    },
    title: {
        margin: 0,
        fontWeight: 'normal',
        cursor: 'pointer'
    },
    video: {
        minWidth: '200px',
        height: '100%',
        objectFit: 'scale-down',
    },
    overlayVideo: {
        width: 'auto',
        height: '90vh',
        objectFit: 'contain'
    },
    overlayTitle: {
        position: 'absolute',
        fontSize: '90px',
        top: '50%',
        transform: 'translateY(-50%)',
        rotate: '-50deg',
        cursor: 'default',
        left: '0',
        color: 'var(--secondary-text-color)',
        transformOrigin: 'left top'
    },
    overlaySubtitle: {
        position: 'absolute',
        bottom: '10%',
        rotate: '0deg',
        cursor: 'default',
        right: 0,
        fontSize: '60px',
        color: 'var(--main-text-color-light)'
    }
})

function InstaClip() {

    const style = useStyle()

    const [overlay, setOverlay] = useState(false)

    const handleRedirectReel = () => { window.location.replace('https://www.instagram.com/reel/Cln7MtHgplA/') }
    const handleRedirectProfile = () => { window.location.replace('https://www.instagram.com/who1snick/') }

    const openVideo = () => { setOverlay(true) }
    const closeVideo = () => { setOverlay(false) }

  return (
    <motion.div 
        className={style.videoContainer}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration:1, ease: 'easeInOut'}}>
        <div className={style.instagramContainer}>

            <div className={style.instagramHeader}>
                <div className={style.iconContainer}>
                    <LazyImage classes={[style.icon]} src={IcoInsta} onClick={handleRedirectProfile} alt="Instagram icon" />
                </div>
                <div className={style.profileDescription}>
                    <h5 className={style.nickname} onClick={handleRedirectProfile}>who1snick</h5>
                    <h6 className={style.title} onClick={handleRedirectReel} >Meet your Content Creator</h6>
                </div>
            </div>

            <div className={style.instagramVideo}>
            <span className={style.hoverSpan} onClick={handleRedirectProfile} >View profile</span>
                <div className={style.playButton} onClick={openVideo}></div>
                <LazyVideo 
                    src={instagramVideo} 
                    classes={[style.video]} 
                    loop={true} 
                    autoplay={true} 
                    muted={true} 
                    controls={false}
                    onClick={openVideo} />
            </div>

        </div>

        {overlay &&
            <Overlay onClose={closeVideo}>
                <TextMotion />
                <div onClick={e => e.stopPropagation()}>
                    <Video className={style.overlayVideo} id="instagram-video" autoPlay
                        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
                        <source src={instagramVideo} />
                    </Video>
                </div>
            </Overlay>
        }

    </motion.div>
  )
}

export default InstaClip