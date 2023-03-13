import React from 'react'

import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({

content: {
    '@media (max-width: 600px)': {
        width: '100%',
        '&:nth-child(even)': {
        backgroundColor: 'var(--main-bg-color-dark)',
        color: 'var(--main-text-color-light)',
        }
    },
    height: '100vh',
    width: '50%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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