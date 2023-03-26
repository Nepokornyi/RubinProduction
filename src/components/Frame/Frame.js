import React from 'react'

import Counter from '../Counter/Counter'
import { createUseStyles } from 'react-jss'
import { useMediaQuery } from 'react-responsive'

const 
    borderStyle = '3px solid var(--main-bg-color-light)',
    borderSpace = '20px'

const useStyle = createUseStyles({
    '@keyframes pop':{
        '0%': {opacity: 0},
        '50%': {opacity: 1},
        '100%': {opacity: 0},
    },
    animation:{
        animationDuration: '2s',
        animationName: '$pop',
        animationIterationCount: 'infinite'
    },
    overlay: {
        cursor: 'default',
        pointerEvents: 'none',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        marginTop: '5vh',
        width: '95vw',
        height: '85vh',
        marginBottom: '2.5vh',
        opacity: 0.6,
    },

    overlayHelper: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },

    overlayElement: {
        padding: '20px',
        width: '150px',
        height: '100px',
        position: 'absolute',
        '@media (max-width: 500px)':{
            width: '80px',
            height: '60px'
        }
    },

    overlayText: {
        fontSize: '1.25em',
        color: 'white',
    },

    counter:{
        display: 'flex',
        justifyContent: 'flex-end'
    },

    topLeft: {
        borderLeft: borderStyle,
        borderTop: borderStyle,
        top: borderSpace,
        left: borderSpace,
        textAlign: 'left'
    },

    topRight: {
        borderRight: borderStyle,
        borderTop: borderStyle,
        top: borderSpace,
        right: borderSpace,
        textAlign: 'right'
    },

    bottomLeft: {
        borderLeft: borderStyle,
        borderBottom: borderStyle,
        bottom: borderSpace,
        left: borderSpace,
        textAlign: 'left'
    },

    bottomRight: {
        borderRight: borderStyle,
        borderBottom: borderStyle,
        bottom: borderSpace,
        right: borderSpace,
        textAlign: 'right'
    },

    bottomLeftText: {
        position: 'absolute',
        bottom: borderSpace,
        left: borderSpace
    },

    bottomRightText: {
        position: 'absolute',
        bottom: borderSpace,
        right: borderSpace
    }
  })

function Frame() {

    const style = useStyle();

    const isMobile = useMediaQuery({query: '(max-width:500px)'});
    const isTablet = useMediaQuery({query: '(min-width:501px) and (max-width:900px)'});
    const isLaptop = useMediaQuery({query: '(min-width:901px)'});

    return (
        <>
            <div className={style.frameContainer}>
                <div className={style.overlay}>
                    <div className={style.overlayHelper}>
                        <div className={`${style.overlayElement} ${style.topLeft}`}>
                        <span id="overlay-top-left-text" className={style.overlayText}>
                            <span className={style.animation}>🔴</span> REC
                        </span>
                        </div>
                        <div className={`${style.overlayElement} ${style.topRight}`}>
                        <span id="overlay-top-right-text" className={`${style.overlayText} ${style.counter}`}>
                            00:<div id="counter"></div>
                        </span>
                        </div>
                        <div className={`${style.overlayElement} ${style.bottomLeft}`}>
                        <span className={`${style.overlayText} ${style.bottomLeftText}`}>
                            60 FPS
                        </span>
                        </div>
                        <div className={`${style.overlayElement} ${style.bottomRight}`}>
                        <span className={`${style.overlayText} ${style.bottomRightText}`}>
                            {isLaptop && '1920x1080'}
                            {isTablet && '1280x720'}
                            {isMobile && '640x360'}
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={style.frameContainer}>
                {isMobile && <MobileFramePicture className={style.frame} />}
                {isTablet && <TabletFramePicture className={style.frame} />}
                {isLaptop && <WideFramePicture className={style.frame} />}
            </div> */}
        </>
    )
}

export default Frame