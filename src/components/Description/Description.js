import React from 'react'

import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({

content: {
    height: '100%',
    width: '50%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 800px)': {
        width: '100%',
        height: '50%',
        '&:nth-child(even)': {
        backgroundColor: 'var(--main-bg-color-dark)',
        color: 'var(--main-text-color-light)',
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