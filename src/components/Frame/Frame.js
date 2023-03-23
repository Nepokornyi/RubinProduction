import React from 'react'

// import { useMediaQuery } from 'react-responsive'
import { createUseStyles } from 'react-jss'

// import {ReactComponent as MobileFramePicture } from '../../assets/img/mobileFramePicture.svg'
// import {ReactComponent as TabletFramePicture } from '../../assets/img/tabletFramePicture.svg'
// import {ReactComponent as WideFramePicture } from '../../assets/img/wideFramePicture.svg'

const 
    borderStyle = '3px solid var(--main-bg-color-light)',
    borderSpace = '20px'

const useStyle = createUseStyles({

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
        zIndex: 100
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
        position: 'absolute'
    },

    overlayText: {
        fontSize: '1.25em',
        color: 'white',
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
    // frameContainer: {
    //     width: '95vw',
    //     height: '80vh',
    //     position: 'absolute',
    //     top: '80%',
    //     left: '50%',
    //     transform: 'translate(-50%, -80%)',
    //     zIndex: '1',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    // frame: {
    //     width: '100%',
    //     height: '100%'
    // }
  })

function Frame() {

    const style = useStyle();

    // const isMobile = useMediaQuery({query: '(max-width:500px)'});
    // const isTablet = useMediaQuery({query: '(min-width:501px) and (max-width:900px)'});
    // const isLaptop = useMediaQuery({query: '(min-width:901px)'});

    return (
        <>
            <div className={style.frameContainer}>
                <div className={style.overlay}>
                    <div className={style.overlayHelper}>
                        <div className={`${style.overlayElement} ${style.topLeft}`}>
                        <span id="overlay-top-left-text" className={style.overlayText}>
                            🔴 REC
                        </span>
                        </div>
                        <div className={`${style.overlayElement} ${style.topRight}`}>
                        <span id="overlay-top-right-text" className={style.overlayText}>
                            00:00
                        </span>
                        </div>
                        <div className={`${style.overlayElement} ${style.bottomLeft}`}>
                        <span className={`${style.overlayText} ${style.bottomLeftText}`}>
                            25 FPS
                        </span>
                        </div>
                        <div className={`${style.overlayElement} ${style.bottomRight}`}>
                        <span className={`${style.overlayText} ${style.bottomRightText}`}>
                            1280x720
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