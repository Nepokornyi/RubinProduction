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
            marginBottom: '15px'
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
            <li>I am happy to be your highly skilled Content Creator with a passion for capturing captivating visuals across a wide range of genres like sports, fashion, music videos, and a lot beyond.</li>
            <li>With years of experience in the industry my bullet point is bringing a creative vision to life, from pre-production planning to shooting on location with expertise in post-production, motion-design, and VFX is especially notable, bringing an added level of polish and flair to your work.</li>
            <li>Whether shooting on location or in-studio, will have a keen eye for lighting, framing, and composition. Work is marked by its artistry and beauty, as well as ability to communicate a message or tell a story.</li>
        </ul>
    </motion.div>
  )
}

export default AboutDescription