import React from 'react'
import Dialog from './Dialog';

import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
    dialog:{
        minWidth: '500px',
        height: '200px',
        backgroundColor: 'var(--main-bg-color-light)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    message:{
        color: 'var(--main-text-color-dark)'
    },
    closeButton: {
        background: 'none',
        border: 'none',
        fontSize: '25px',
        color: 'var(--secondary-text-color)',
        cursor: 'pointer',
        position: 'absolute',
        right: '15px',
        top: '15px'
    }
})

function DialogSuccess({open ,onClose}) {

    const style = useStyle();

    if(!open) return null;

    const handleClose = () => {
        onClose && onClose()
    }

    return (
        <Dialog onClose={handleClose}>
            <div className={style.dialog} onClick={e => e.stopPropagation()}>
                <h2 className={style.message}>Thank you! I'll get back to you soon.</h2>
                <button onClick={handleClose} className={style.closeButton}>X</button>
            </div>
        </Dialog>
    )
}

export default DialogSuccess