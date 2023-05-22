import React, { useState, useEffect } from 'react'

import Overlay from '../Overlay/Overlay'
import LazyVideo from '../LazyHash/LazyVideo';
import EmbeddedInstagram from '../EmbeddedInstagram/EmbeddedInstagram';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { createUseStyles } from 'react-jss'
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next';

import VideoCover from '../../assets/video/cover.mp4'
import VideoMotion from '../../assets/video/motion.mp4'
import VideoWoman from '../../assets/video/woman.mp4'
import VideoSekuron from '../../assets/video/sekuron.mp4'
import VideoSamurai from '../../assets/video/samurai.mp4'
import VideoTVSpot from '../../assets/video/jacobs.mp4'
import VideoTVShow from '../../assets/video/samosebou.mp4'
import VideoCake from '../../assets/video/cake.mp4'
import VideoApplication from '../../assets/video/application.mp4'
import VideoBakery from '../../assets/video/bakery.mp4'



const useStyle = createUseStyles({
    sliderContainer: {
        width: '100%', 
        height: '80%', 
        '@media(max-width:500px)':{
            height: '50%'
        }
    },
    projectVideo: {
        minWidth: '300px',
        height: '35vh',
        position: 'relative',
        overflow: 'hidden',
        '@media(max-width:800px)':{
            height: '70vh'
        },
        '@media(max-width:500px)':{
            height: '35vh'
        },
        '&:hover $gridOverlay': {
            opacity: 1,
            transitionDuration: '350ms',
            transitionTimingFunction: 'ease-in-out',
          },
        '& > p': {
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translate(-50%)',
            textAlign: 'center'
        }
    },
    video:{
        position: 'absolute',
        opacity: '0.65',
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        '@media(max-width:800px)': {
            objectFit: 'contain'
        }
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
        opacity: 0,
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
        height: '80vh',
        border: 'none'
    },
    test:{
        width: '80vw',
        height: '80vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    }
})

function CarouselGrid() {

    const style = useStyle();
    const { t } = useTranslation();

    const items = [
    {   id: 1,
        type: 'vimeo',
        link: 'https://player.vimeo.com/video/772372989?h=02c19fdb13&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: t('page.portfolio.video_category.music'),
        localVideo: VideoCover,
        blurHash: 'LB4{#wbdNbj]yZaeWXogR*e-jEkC'
    },
    {   id: 2,
        type: 'vimeo', 
        link: 'https://player.vimeo.com/video/732085536?h=5cb9947eaf&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: t('page.portfolio.video_category.film'),
        localVideo: VideoMotion,
        blurHash: 'L02i62M,O9k6P,m@tNSu.5RCtPSJ'
    },
    {   id: 3, 
        type: 'vimeo',
        link: 'https://player.vimeo.com/video/734632991?h=773facb522&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: t('page.portfolio.video_category.ad'),
        localVideo: VideoWoman,
        blurHash: 'L17w$bQT-;O:H+qu^+KK}@8x_2Nt'
    },
    {   id: 4, 
        type: 'vimeo',
        link: 'https://player.vimeo.com/video/759845104?h=41bf313a14&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: t('page.portfolio.video_category.corporate'),
        localVideo: VideoSekuron,
        blurHash: 'L9GScM_N%zaxSgICt7-;x[NGtRD%'
    },
    {   id: 5, 
        type: 'vimeo',
        link: 'https://player.vimeo.com/video/734656185?h=69548e618a&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: t('page.portfolio.video_category.tv_spot'),
        localVideo: VideoTVSpot,
        blurHash: 'L17m~f0000~X-=xD4-xuIo-pxu56'
    },
    {   id: 6, 
        type: 'vimeo',
        link: 'https://player.vimeo.com/video/727726230?h=8cdb39082b&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: t('page.portfolio.video_category.fashion'),
        localVideo: VideoSamurai,
        blurHash: 'LFFg;Hx[zZX7ugtQNGo|cWozJ~sD'
    },
    {   id: 7, 
        type: 'vimeo',
        link: 'https://player.vimeo.com/video/732384138?h=04b28d93d9&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: t('page.portfolio.video_category.show'),
        localVideo: VideoTVShow,
        blurHash: 'L79i^|?F0JbZ0gIWwKoL4.of~Wo2',
    },
    {   id: 8, 
        type: 'vimeo',
        link: 'https://player.vimeo.com/video/722883251?h=6c4a5876b9&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: t('page.portfolio.video_category.corporate'),
        localVideo: VideoCake,
        blurHash: 'L7F}WJ+]~U#l05ozEMj[0z$%MKtR',
    },
    {   id: 9, 
        type: 'vimeo',
        link: 'https://player.vimeo.com/video/727716165?h=d3f26388ce&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: t('page.portfolio.video_category.app'),
        localVideo: VideoApplication,
        blurHash: 'L~PQo]?1oMNEt7j]j[fiRQaxj[j[',
    },
    {   id: 10, 
        type: 'vimeo',
        link: 'https://player.vimeo.com/video/722881788?h=54c3ae4a52&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: t('page.portfolio.video_category.corporate'),
        localVideo: VideoBakery,
        blurHash: 'LDFhR}sA00tlysI;9F?GWUs,xabc',
    }
]


    const [overlay, setOverlay] = useState(false)
    const [videoLink, setVideoLink] = useState('')
    const [videoType, setVideoType] = useState('')

    const isMobile = useMediaQuery({query: '(max-width:600px)'});

    const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3250,
        speed: 1750,
        pauseOnFocus: true,
        swipeToSlide: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                }
            }
        ]
    }



    useEffect(() => {
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    },)

    const handleOpenOverlay = (link, type) => {
        setVideoLink(link)
        setVideoType(type)
        setOverlay(true)
    }
    const handleCloseOverlay = () => {
        setOverlay(false)
        setVideoLink('')
        setVideoType('')
    }

    const carouselItems = items.map((props) => 
    <div key={props.id} className={style.projectVideo} onClick={() => {isMobile && handleOpenOverlay(props.link, props.type)}} >
    
        <LazyVideo src={props.localVideo} className={style.video} blurHash={props.blurHash} />

        <p>{props.content}</p>
        
        {!isMobile &&
        <div className={style.gridOverlay}>
            <button onClick={() => handleOpenOverlay(props.link, props.type)}>{t('page.portfolio.button')}</button>
        </div>
        }
    </div>
);

  return (
    <>
        <div className={style.sliderContainer}>
            <Slider {...sliderSettings}>
                {carouselItems}
            </Slider>
        </div>

        {overlay &&
            <Overlay onClose={handleCloseOverlay}>
                {videoType === 'vimeo' &&
                    <iframe title="Portfolio Clip" src={videoLink} className={style.vimeo} allow="autoplay; loop; fullscreen; picture-in-picture" allowFullScreen />
                }
                {videoType === 'instagram' &&
                    <EmbeddedInstagram url={videoLink} />
                }
                
            </Overlay>
        }

    </>
  )
}

export default CarouselGrid