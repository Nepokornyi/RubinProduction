import React from 'react'

import { createUseStyles } from 'react-jss'
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next';

const  borderStyle = '3px solid var(--main-bg-color-light)';
const borderSpace = '35px';
const mobileSpace = '15px';

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
        pointerEvents: 'none',
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.6,
        transitionDuration: '350ms',
        zIndex: 5
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
        '@media (max-width: 900px)':{
            width: '125px',
            height: '85px',
            borderWidth: '2px !important',
            '& > span':{
                fontSize: '17px'
            } 
        },
        '@media (max-width: 500px)':{
            width: '75px',
            height: '60px',
            borderWidth: '1px !important',
            '& > span':{
                fontSize: '14px'
            } 
        },
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
        textAlign: 'left',
    },

    topRight: {
        borderRight: borderStyle,
        borderTop: borderStyle,
        top: borderSpace,
        right: borderSpace,
        textAlign: 'right',
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
        left: borderSpace,
        '@media(max-width:500px)': {
            bottom: mobileSpace,
            left: mobileSpace,
        }
    },

    bottomRightText: {
        position: 'absolute',
        bottom: borderSpace,
        right: borderSpace,
        '@media(max-width:500px)': {
            bottom: mobileSpace,
            right: mobileSpace,
        }
    }
  })

function Frame({ frameFade }) {

    const isMobile = useMediaQuery({query: '(max-width:500px)'});
    const isTablet = useMediaQuery({query: '(min-width:501px) and (max-width:900px)'});
    const isLaptop = useMediaQuery({query: '(min-width:901px)'});

    const style = useStyle();
    const { t } = useTranslation();

    return (
        <>
            <div className={`${style.overlay} ${frameFade}`}>
                <div className={style.overlayHelper}>
                    <div className={`${style.overlayElement} ${style.topLeft}`}>
                    <span id="overlay-top-left-text" className={style.overlayText}>
                    </span>
                    </div>
                    <div className={`${style.overlayElement} ${style.topRight}`}>
                    <span id="overlay-top-right-text" className={style.overlayText}>
                        <span className={style.animation}>🔴</span> REC
                    </span>
                    </div>
                    <div className={`${style.overlayElement} ${style.bottomLeft}`}>
                    <span className={`${style.overlayText} ${style.bottomLeftText}`}>
                        {t('page.landing.frame.fps')} <br />
                        {isLaptop && t('page.landing.frame.resolution_big')}
                        {isTablet && t('page.landing.frame.resolution_medium')}
                        {isMobile && t('page.landing.frame.resolution_small')}
                    </span>
                    </div>
                    <div className={`${style.overlayElement} ${style.bottomRight}`}>
                    <span className={`${style.overlayText} ${style.bottomRightText} ${style.counter}`}>
                        {t('page.landing.frame.duration')}
                    </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frame