import React from 'react'

import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'

const useStyle = createUseStyles({
    header: {
        color: 'var(--secondary-text-color)',
        fontSize: '56px',
        margin: 0,
        '@media (max-width:900px)': {
            fontSize: '48px'
        }
    },
    text: {
        fontSize: '22px',
        '@media (max-width:900px)': {
            fontSize: '18px'
        }
    },
    list: {
        listStyle: 'none',
        padding: 0,
        fontSize: '22px',
        '@media (max-width:900px)': {
            fontSize: '18px'
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
        <h2 className={style.header}>Hi, I'm Nick</h2>
        <p className={style.text}>
            I'm a videographer <br />
             and photographer
        </p>
        <ul className={style.list}>
            <li>Experience: More than 5 years</li>
            <li>Types of shots : All</li>
            <li>Languages: EN, CZ, RU</li>
            <li>Contact: xxxxxxxx</li>
        </ul>
    </motion.div>
  )
}

export default AboutDescription