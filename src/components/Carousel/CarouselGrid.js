import React, { useState, useEffect } from 'react'

import Overlay from '../Overlay/Overlay'
import LazyVideo from '../LazyHash/LazyVideo';

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
        height: '95vh',
        border: 'none'
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
        type: 'instagram',
        link: '', 
        content: 'Samurai Video',
        localVideo: VideoSamurai,
        blurHash: 'LFFg;Hx[zZX7ugtQNGo|cWozJ~sD'
    },
    {   id: 6, 
        type: 'instagram',
        link: '', 
        content: 'Instagram1',
        localVideo: InstagramClip1,
        blurHash: 'L4BWf200~W~q.9yXE0IUR%%gD$M{'
    },
    {   id: 7, 
        type: 'instagram',
        link: '', 
        content: 'Instagram2',
        localVideo: InstagramClip2,
        blurHash: 'L27-i%%MN2%0~qxuxsM|-;WBt7oL'
    },
    {   id: 8, 
        type: 'instagram',
        link: '', 
        content: 'Instagram3',
        localVideo: InstagramClip3,
        blurHash: 'L7EeYw}sIBRk1MEg9aWUIpSzkWV@'
    },
    {   id: 9, 
        type: 'instagram',
        link: '', 
        content: 'Instagram4',
        localVideo: InstagramClip4,
        blurHash: 'L26tduxa56oL~WWW9ZoebbNGR%t7'
    },
    {   id: 10, 
        type: 'instagram',
        link: '', 
        content: 'Instagram5',
        localVideo: InstagramClip5,
        blurHash: 'LSHVbj9F_N_3E1MxM{M{IAoft8oe'
    },
    {   id: 11, 
        type: 'instagram',
        link: '', 
        content: 'Instagram6',
        localVideo: InstagramClip6,
        blurHash: 'LUH_Gc59Rjt8~VNgRj%1I^R+xWt7'
    },
    {   id: 12, 
        type: 'instagram',
        link: '', 
        content: 'Instagram7',
        localVideo: InstagramClip7,
        blurHash: 'LHH_C;00?^~10gxIWDt5E2-oM|M~'
    },
    {   id: 13, 
        type: 'instagram',
        link: '', 
        content: 'Instagram8',
        localVideo: InstagramClip8,
        blurHash: 'L1G@;=Af|,}3000N~V^,02tn0h9s'
    },
    {   id: 14, 
        type: 'instagram',
        link: '', 
        content: 'Instagram9',
        localVideo: InstagramClip9,
        blurHash: 'L%45qOpyksaKaie:e-aca1aKf5kV'
    },
    {   id: 15, 
        type: 'instagram',
        link: '', 
        content: 'Instagram10',
        localVideo: InstagramClip10,
        blurHash: 'LcFf?T$*=eNv}Yn%aeNu,@oLR+S2'
    },
    {   id: 16, 
        type: 'instagram',
        link: '', 
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
        <div className={style.projectVideo} onClick={() => handleOpenOverlay(props.link, props.type)}>
        
            <LazyVideo src={props.localVideo} className={style.video} blurHash={props.blurHash} />

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
                {videoType === 'vimeo' &&
                    <iframe title="Portfolio Clip" src={videoLink} className={style.vimeo} allow="autoplay; loop; fullscreen; picture-in-picture" allowFullScreen />
                }
                {videoType === 'instagram' &&
                    <>
      <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/Cmo-8GBgBWv/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version={14} style={{background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)'}}>
        <div style={{padding: '16px'}}> <a href="https://www.instagram.com/reel/Cmo-8GBgBWv/?utm_source=ig_embed&utm_campaign=loading" style={{background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%'}} target="_blank"> 
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}> 
              <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px'}} />
              <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center'}}> 
                <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px'}} /> 
                <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px'}} /></div></div>
            <div style={{padding: '19% 0'}} /> 
            <div style={{display: 'block', height: '50px', margin: '0 auto 12px', width: '50px'}}>
              <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink">
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <g transform="translate(-511.000000, -20.000000)" fill="#000000"><g>
                      <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 
                        541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 
                        C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 
                        557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,
                        20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 
                        C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" /></g></g></g></svg></div>
            <div style={{paddingTop: '8px'}}> 
              <div style={{color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px'}}>Посмотреть эту публикацию в Instagram</div></div>
            <div style={{padding: '12.5% 0'}} /> <div style={{display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center'}}><div> <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)'}} /> 
                <div style={{backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px'}} /> 
                <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)'}} /></div><div style={{marginLeft: '8px'}}> 
                <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '20px', width: '20px'}} /> 
                <div style={{width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)'}} /></div>
              <div style={{marginleft: 'auto'}}> <div style={{width: '0px', borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)'}} /> <div style={{backgroundColor: '#F4F4F4', flexGrow: 0, height: '12px', width: '16px', transform: 'translateY(-4px)'}} /> 
                <div style={{width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)'}} /></div></div> <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: '24px'}}> 
              <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '224px'}} /> <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '144px'}} /></div></a>
          <p style={{color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
            <a href="https://www.instagram.com/reel/Cmo-8GBgBWv/?utm_source=ig_embed&utm_campaign=loading" style={{color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none'}} target="_blank">
              Публикация от Video | Photo | Prague (@who1snick)</a></p></div></blockquote>
              <script async src="http://www.instagram.com/embed.js"></script>
                    </>
                }
                
            </Overlay>
        }

    </>
  )
}

export default CarouselGrid