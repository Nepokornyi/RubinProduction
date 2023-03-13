import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
    content: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '&:nth-child(even)': {
          backgroundColor: 'var(--main-bg-color-light)',
          color: 'var(--main-text-color-dark)',
          '@media (max-width:600px)': {
            height: '200vh'
          }
        }
    }
});

function Content({children}) {
    const style = useStyle()
  return (
    <div className={style.content}>
        {children}
    </div>
  )
}

export default Content