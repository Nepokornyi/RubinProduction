import React, { useState } from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { createUseStyles } from 'react-jss'
import { LazyVideo } from 'react-lazy-media'

import Overlay from '../Overlay/Overlay'

import VideoCover from '../../assets/video/cover.webm'
import VideoMotion from '../../assets/video/motion.webm'
import VideoWoman from '../../assets/video/woman.webm'
import VideoSekuron from '../../assets/video/sekuron.webm'



const useStyle = createUseStyles({
    mainContainer: {
        width: '90vw',
        '& > div > div':{
            transition: 'transform 3s cubic-bezier(0.2,1,0.3,1) 0s'
        }
    },
    projectVideo: {
        minWidth: '300px',
        minHeight: '250px',
        position: 'relative',
        overflow: 'hidden',
        margin: '15px',
        '&:hover $gridOverlay': {
            transform: 'translateY(-0%)',
            transitionDuration: '350ms',
            transitionTimingFunction: 'ease-in-out',
          },
        '& > p': {
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translate(-50%)'
        }
    },
    video:{
        position: 'absolute',
        opacity: '0.65',
        objectFit: 'cover',
        width: '100%',
        height: '100%'
    },
    gridOverlay: {
        background: 'rgba(0,0,0,0.65)',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'translateY(-101%)',
        transition: 'ease',
        transitionDuration: '350ms',
        '& > button': {
            background: 'none',
            outline: 'none',
            letterSpacing: '2px',
            border: '1px solid var(--main-bg-color-light)',
            color: 'white',
            textTransform: 'uppercase',
            cursor: 'pointer',
            padding: '10px',
            transitionDuration: '350ms',
        },
        '& > button:hover': {
            transition: 'ease',
            background: 'var(--main-bg-color-light)',
            color: 'var(--main-text-color-dark)',
            transform: 'scale(1.05)',
            transitionDuration: '350ms'
          }
    },
    vimeo: {
        width: '80vw',
        height: '95vh',
        border: 'none'
    }
})

function CarouselGrid() {

    const items = [
    {   id: 1, 
        link: 'https://player.vimeo.com/video/772372989?h=02c19fdb13&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Fashion Video',
        localVideo: VideoCover
    },
    {   id: 2, 
        link: 'https://player.vimeo.com/video/732085536?h=5cb9947eaf&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Fashion Video',
        localVideo: VideoMotion
    },
    {   id: 3, 
        link: 'https://player.vimeo.com/video/734632991?h=773facb522&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Fashion Video',
        localVideo: VideoWoman
    },
    {   id: 4, 
        link: 'https://player.vimeo.com/video/759845104?h=41bf313a14&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Fashion Video',
        localVideo: VideoSekuron
    },
    {   id: 5, 
        link: 'https://player.vimeo.com/video/772372989?h=02c19fdb13&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Fashion Video',
        localVideo: VideoCover
    },
    {   id: 6, 
        link: 'https://player.vimeo.com/video/732085536?h=5cb9947eaf&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Fashion Video',
        localVideo: VideoMotion
    },
    {   id: 7, 
        link: 'https://player.vimeo.com/video/734632991?h=773facb522&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Fashion Video',
        localVideo: VideoWoman
    },
    {   id: 8, 
        link: 'https://player.vimeo.com/video/759845104?h=41bf313a14&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Fashion Video',
        localVideo: VideoSekuron
    },
    {   id: 9, 
        link: 'https://player.vimeo.com/video/772372989?h=02c19fdb13&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Fashion Video',
        localVideo: VideoCover
    },
    {   id: 10, 
        link: 'https://player.vimeo.com/video/732085536?h=5cb9947eaf&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Fashion Video',
        localVideo: VideoMotion
    },
    {   id: 11, 
        link: 'https://player.vimeo.com/video/734632991?h=773facb522&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Fashion Video',
        localVideo: VideoWoman
    },
    {   id: 12, 
        link: 'https://player.vimeo.com/video/759845104?h=41bf313a14&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Fashion Video',
        localVideo: VideoSekuron
    }
]
    const style = useStyle()

    const [overlay, setOverlay] = useState(false)
    const [videoLink, setVideoLink] = useState('')

    const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 750,
        speed: 1000,
        pauseOnFocus: true,
        swipeToSlide: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                }
            }
        ]
    }

    const handleOpenOverlay = (link) => {
        setVideoLink(link)
        setOverlay(true)
    }
    const handleCloseOverlay = () => {
        setOverlay(false)
        setVideoLink('')
    }

    const carouselItems = items.map((props) => 
    <div key={props.id}>
        <div className={style.projectVideo} onClick={() => handleOpenOverlay(props.link)}>
            {/* <LazyVideo 
                src={props.localVideo} 
                classes={[style.video]} 
                controls={false} 
                loop={true}
                muted={true}
                autoplay={true} /> */}
            
            <video className={style.video} loop muted autoPlay>
                    <source src={props.localVideo} type="video/webm" />
            </video>

            <p>{props.content}</p>
            <div className={style.gridOverlay}>
                <button>view more</button>
            </div>
        </div>
    </div>
);

  return (
    <>
        <div style={{width: '95%'}}>
            <Slider {...sliderSettings}>
                {carouselItems}
            </Slider>
        </div>

        {overlay &&
            <Overlay onClose={handleCloseOverlay}>
                <iframe title="Portfolio Clip" src={videoLink} className={style.vimeo} allow="autoplay; loop; fullscreen; picture-in-picture" allowFullScreen />
            </Overlay>
        }

    </>
  )
}

export default CarouselGrid