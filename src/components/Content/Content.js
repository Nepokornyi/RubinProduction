import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
    content: {
        width: '100%',
        minHeight: '400px',
        height: '100vh',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // '&:nth-child(even)': {
        //     backgroundColor: 'var(--main-bg-color-light)',
        //     color: 'var(--main-text-color-dark)',
        //     '@media (max-width:800px)': {
        //     height: '200vh'
        //     }
        // }
    },
});

function Content({children, className}) {
    const style = useStyle()
    return (
        <div className={`${style.content} ${className}`}>
            {children}
        </div>
    )
}

export default Content