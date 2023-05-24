import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
    content: {
        width: '100%',
        minHeight: '300px',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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