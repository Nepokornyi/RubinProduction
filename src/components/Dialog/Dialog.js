import React from 'react'
import ReactDom from 'react-dom'
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    dialogContainer:{
        position: 'fixed',
        background: 'rgba(0, 0, 0, 0.9)',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
        zIndex: 6
    }
})


function Dialog({ children, onClose }) {
    const style = useStyle();

    const handleClose = () => {
        onClose && onClose();
    }

    return ReactDom.createPortal(
        <div onClick={handleClose} className={style.dialogContainer}>
            {children}
        </div>,
        document.getElementById('portal')
    )
}

export default Dialog