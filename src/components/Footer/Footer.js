import React from 'react'

import { createUseStyles } from 'react-jss'
import { useMediaQuery } from 'react-responsive'

const useStyle = createUseStyles({
    footer:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        minHeight: '65px',
        backgroundColor: 'var(--main-bg-color-dark)',
        borderTop: '1px solid var(--secondary-bg-color-dark)',
        zIndex: '5',
    }
})

function Footer() {

    const style = useStyle()

    return (
        <div className={style.footer}>

        </div>
    )
}

export default Footer