import React, { useState, useEffect } from 'react'

import Overlay from '../Overlay/Overlay'
import LazyVideo from '../LazyHash/LazyVideo';
import EmbeddedInstagram from '../EmbeddedInstagram/EmbeddedInstagram';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { createUseStyles } from 'react-jss'

import VideoCover from '../../assets/video/cover.mp4'
import VideoMotion from '../../assets/video/motion.mp4'
import VideoWoman from '../../assets/video/woman.mp4'
import VideoSekuron from '../../assets/video/sekuron.mp4'
import VideoSamurai from '../../assets/video/samurai.mp4'
import InstagramClip1 from '../../assets/video/01_instagram.mp4'
import InstagramClip2 from '../../assets/video/02_instagram.mp4'
import InstagramClip3 from '../../assets/video/03_instagram.mp4'
import InstagramClip4 from '../../assets/video/04_instagram.mp4'
import InstagramClip5 from '../../assets/video/05_instagram.mp4'
import InstagramClip6 from '../../assets/video/06_instagram.mp4'
import InstagramClip7 from '../../assets/video/07_instagram.mp4'
import InstagramClip8 from '../../assets/video/08_instagram.mp4'
import InstagramClip9 from '../../assets/video/09_instagram.mp4'
import InstagramClip10 from '../../assets/video/10_instagram.mp4'
import InstagramClip11 from '../../assets/video/11_instagram.mp4'



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

    const items = [
    {   id: 1,
        type: 'vimeo',
        link: 'https://player.vimeo.com/video/772372989?h=02c19fdb13&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Cover Video',
        localVideo: VideoCover,
        blurHash: 'LB4{#wbdNbj]yZaeWXogR*e-jEkC'
    },
    {   id: 2,
        type: 'vimeo', 
        link: 'https://player.vimeo.com/video/732085536?h=5cb9947eaf&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Motion Video',
        localVideo: VideoMotion,
        blurHash: 'L02i62M,O9k6P,m@tNSu.5RCtPSJ'
    },
    {   id: 3, 
        type: 'vimeo',
        link: 'https://player.vimeo.com/video/734632991?h=773facb522&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Woman Video',
        localVideo: VideoWoman,
        blurHash: 'L17w$bQT-;O:H+qu^+KK}@8x_2Nt'
    },
    {   id: 4, 
        type: 'vimeo',
        link: 'https://player.vimeo.com/video/759845104?h=41bf313a14&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Sekuron Video',
        localVideo: VideoSekuron,
        blurHash: 'L9GScM_N%zaxSgICt7-;x[NGtRD%'
    },
    {   id: 5, 
        type: 'vimeo',
        link: 'https://player.vimeo.com/video/727726230?h=8cdb39082b&autoplay=1&loop=1&title=0&byline=0&portrait=0', 
        content: 'Samurai Video',
        localVideo: VideoSamurai,
        blurHash: 'LFFg;Hx[zZX7ugtQNGo|cWozJ~sD'
    },
    {   id: 6, 
        type: 'instagram',
        link: 'https://www.instagram.com/reel/Cmo-8GBgBWv/?utm_source=ig_embed&utm_campaign=loading', 
        content: 'Instagram1',
        localVideo: InstagramClip1,
        blurHash: 'L4BWf200~W~q.9yXE0IUR%%gD$M{'
    },
    {   id: 7, 
        type: 'instagram',
        link: 'https://www.instagram.com/reel/CkIS2oQAfUD/?utm_source=ig_embed&amp;utm_campaign=loading', 
        content: 'Instagram2',
        localVideo: InstagramClip2,
        blurHash: 'L27-i%%MN2%0~qxuxsM|-;WBt7oL'
    },
    {   id: 8, 
        type: 'instagram',
        link: 'https://www.instagram.com/reel/Cm4n4PPBQZ4/?utm_source=ig_embed&amp;utm_campaign=loading', 
        content: 'Instagram3',
        localVideo: InstagramClip3,
        blurHash: 'L7EeYw}sIBRk1MEg9aWUIpSzkWV@'
    },
    {   id: 9, 
        type: 'instagram',
        link: 'https://www.instagram.com/reel/Cm9tY56gB7I/?utm_source=ig_embed&amp;utm_campaign=loading', 
        content: 'Instagram4',
        localVideo: InstagramClip4,
        blurHash: 'L26tduxa56oL~WWW9ZoebbNGR%t7'
    },
    {   id: 10, 
        type: 'instagram',
        link: 'https://www.instagram.com/reel/Ckbg5nOAZrB/?utm_source=ig_embed&amp;utm_campaign=loading', 
        content: 'Instagram5',
        localVideo: InstagramClip5,
        blurHash: 'LSHVbj9F_N_3E1MxM{M{IAoft8oe'
    },
    {   id: 11, 
        type: 'instagram',
        link: 'https://www.instagram.com/reel/CNKVDGrHbMM/?utm_source=ig_embed&amp;utm_campaign=loading', 
        content: 'Instagram6',
        localVideo: InstagramClip6,
        blurHash: 'LUH_Gc59Rjt8~VNgRj%1I^R+xWt7'
    },
    {   id: 12, 
        type: 'instagram',
        link: 'https://www.instagram.com/reel/CJbW0AJgaRP/?utm_source=ig_embed&amp;utm_campaign=loading', 
        content: 'Instagram7',
        localVideo: InstagramClip7,
        blurHash: 'LHH_C;00?^~10gxIWDt5E2-oM|M~'
    },
    {   id: 13, 
        type: 'instagram',
        link: 'https://www.instagram.com/reel/CHBL84mH08u/?utm_source=ig_embed&amp;utm_campaign=loading', 
        content: 'Instagram8',
        localVideo: InstagramClip8,
        blurHash: 'L1G@;=Af|,}3000N~V^,02tn0h9s'
    },
    {   id: 14, 
        type: 'instagram',
        link: 'https://www.instagram.com/reel/CiGarpsAFyy/?utm_source=ig_embed&amp;utm_campaign=loading', 
        content: 'Instagram9',
        localVideo: InstagramClip9,
        blurHash: 'L%45qOpyksaKaie:e-aca1aKf5kV'
    },
    {   id: 15, 
        type: 'instagram',
        link: 'https://www.instagram.com/reel/ClooT4PpgwO/?utm_source=ig_embed&amp;utm_campaign=loading', 
        content: 'Instagram10',
        localVideo: InstagramClip10,
        blurHash: 'LcFf?T$*=eNv}Yn%aeNu,@oLR+S2'
    },
    {   id: 16, 
        type: 'instagram',
        link: 'https://www.instagram.com/reel/CmD7_l8AZXf/?utm_source=ig_embed&amp;utm_campaign=loading', 
        content: 'Instagram11',
        localVideo: InstagramClip11,
        blurHash: 'L14Bd#0h4=~A0Nxt^$4;tSnORixv'
    }
]
    const style = useStyle()

    const [overlay, setOverlay] = useState(false)
    const [videoLink, setVideoLink] = useState('')
    const [videoType, setVideoType] = useState('')
    const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1250,
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
    <div key={props.id}>
        <div className={style.projectVideo}>
        
            <LazyVideo src={props.localVideo} className={style.video} blurHash={props.blurHash} />

            <p>{props.content}</p>
            <div className={style.gridOverlay}>
                <button onClick={() => handleOpenOverlay(props.link, props.type)}>view more</button>
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