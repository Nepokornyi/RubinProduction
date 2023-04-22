import React from 'react'

import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'

const useStyle = createUseStyles({
    container:{
        position: 'relative',
        display: 'flex',
        width: '80%',
        minWidth: '350px',
        flexDirection: 'column',
        alignItems: 'center',
        '@media(max-width:800px)':{
            textAlign: 'center',
        }
    },
    header: {
        fontSize: '56px',
        textAlign: 'center',
        position: 'relative',
        margin: 0,
        '@media (max-width:1000px)': {
            fontSize: '48px'
        },
        '&:after':{
            content: "'X'",
            position: 'absolute',
            bottom: '10px',
            right: '100px',
            rotate: '15deg',
            color: 'red',
            fontSize: '35px',
        },
        '&:before':{
            content: "'X'",
            position: 'absolute',
            top: '5px',
            left: '50px',
            rotate: '-15deg',
            color: 'red',
            fontSize: '35px',
        },
    },
    subheader: {
        fontSize: '22px',
        '@media (max-width:1000px)': {
            fontSize: '18px'
        }
    },
    list: {
        listStyle: 'none',
        padding: 0,
        fontSize: '18px',
        '@media (max-width:1000px)': {
            fontSize: '16px'
        },
        '& > li':{
            margin: '15px 0'
        }
    }
})

function AboutDescription() {

    const style = useStyle()

  return (
    <motion.div 
        className={style.container}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration:1, ease: 'easeInOut'}}>
        <h2 className={style.header}>WHO <br /> IS NICK?</h2>
        <h4 className={style.subheader}>
        Owner of Production, Director of Photography,<br />
        Freelance Filmmaker and Photographer
        </h4>

        <ul className={style.list}>
            <p>With years of experience in the industry my bullet point is: </p>
            <li>bringing a <strong>creative</strong> vision to life, from pre-production <strong>planning</strong> to <strong>shooting</strong> on location</li>
            <li>with expertise in <strong>post-production</strong>, <strong>motion-design</strong>, and <strong>VFX</strong> is especially notable, bringing an added level of polish and flair to <span style={{color: 'var(--secondary-text-color)', fontWeight: 'bold'}}>your</span> work.</li>
        </ul>
    </motion.div>
  )
}

export default AboutDescription