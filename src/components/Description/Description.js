import React from 'react'

import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
content: {
    width: '50%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 800px)': {
        width: '100%',
        '&:nth-child(1)':{
            minHeight: '500px',
        },
        '&:nth-child(2)': {
            height: 'auto',
            backgroundColor: 'var(--main-bg-color-dark)',
            color: 'var(--main-text-color-light)',
            padding: '25px 0 50px 0',
        }
        },
    }
})

function Description({children}) {

    const style = useStyle()

    return (
        <div className={style.content}>
            {children}
        </div>
    )
}

export default Description