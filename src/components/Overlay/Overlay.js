import React from 'react'

import { createUseStyles } from 'react-jss'
import { RemoveScrollBar } from 'react-remove-scroll-bar'


const useStyle = createUseStyles({
    overlay:{
        position: 'fixed',
        background: 'rgba(0, 0, 0, 1)',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
        touchAction: 'none',
        zIndex: 20,
        '& > video': {
            width: 'auto',
            height: '90vh',
            objectFit: 'contain'

        }
    },
    closeButton: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        width: '100px',
        height: '30px',
        background: 'var(--main-bg-color-light)',
        color: 'var(--main-text-color-dark)',
        border: '0',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        cursor: 'pointer',
        transitionDuration: '350ms',
        zIndex: '6',
        '&:hover': {
            background: 'var(--main-bg-color-dark)',
            color: 'var(--main-text-color-light)',
            border: '1px solid var(--main-bg-color-light)',
            transitionDuration: '350ms'
        }
    },
})

function Overlay({ children, onClose }) {

    const style = useStyle();

    const closeVideo = () => {
        onClose && onClose();
    }

    return (
        <div className={style.overlay} onClick={closeVideo}>
            <button className={style.closeButton} onClick={closeVideo} >close X</button>
            {children}
            <RemoveScrollBar />
        </div>
    )
}

export default Overlay