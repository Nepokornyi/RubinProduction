import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
    '@keyframes short-eq':{
        '0%': { height: '12px' },
        '50%':{ height: '6px' },
        '100%': {height: '12px' }
    },
    '@keyframes tall-eq':{
        '0%': { height: '19px' },
        '50%':{ height: '9px' },
        '100%': {height: '17px' }
    },

    eqBar:{
        fill: 'white',
        transform: 'scale(1, -1) translate(0, -24px)',
        opacity: '.6'
    },
    eqBar1:{
      animationName: '$short-eq',
      animationDuration: '1s',
      animationIterationCount: 'infinite',
      animationDelay: '0s',  
    },
    eqBar2:{
        animationName: '$tall-eq',
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationDelay: '0.17s',  
    },
    eqBar3:{
        animationName: '$short-eq',
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationDelay: '0.34s',  
    },
    eqBar4:{
        animationName: '$tall-eq',
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationDelay: '0.34s',  
    },
    eqBar5:{
        animationName: '$short-eq',
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationDelay: '0.15s',  
    }
})

function Equalizer({ className }) {

    const style = useStyle();

    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="50" height="24" viewBox="0 0 35 24">
            <rect className={`${style.eqBar} ${style.eqBar1}`} x="4" y="4" width="3.7" height="8"/>
            <rect className={`${style.eqBar} ${style.eqBar2}`} x="10.2" y="4" width="3.7" height="16"/>
            <rect className={`${style.eqBar} ${style.eqBar3}`} x="16.3" y="4" width="3.7" height="11"/>
            <rect className={`${style.eqBar} ${style.eqBar4}`} x="22.4" y="4" width="3.7" height="11"/>
            <rect className={`${style.eqBar} ${style.eqBar5}`} x="28.6" y="4" width="3.7" height="11"/>
        </svg>
    )
}

export default Equalizer