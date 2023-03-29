import React from 'react'

import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'

const useStyle = createUseStyles({
    description:{
      display: 'flex',
      width: '80%',
      minWidth: '350px',
      flexDirection: 'column',
      alignItems: 'center',
    },
    caption: {
      fontSize: '64px',
      textAlign: 'center',
      margin: 0,
      '@media (max-width:900px)': {
          fontSize: '48px'
      }
    },
    subCaption:{
      fontSize: '28px',
      '@media (max-width:900px)':{
        fontSize: '24px'
      }
    },
    text: {
        fontSize: '22px',
        '@media (max-width:900px)': {
            fontSize: '18px'
        }
    }
})

function AtelierDescription() {

    const style = useStyle()

    return (
        <motion.div 
            className={style.description}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration:1, ease: 'easeInOut'}}>
            <h2 className={style.caption}>ATELIER FOR RENT</h2>
            <div>
                <h4 className={style.subCaption}>Perfect for subject content photography</h4>
                <p className={style.text}>Lorem ipsum dolor sit amet consectetur. 
                Nunc in sit fermentum ullamcorper interdum dis sem vulputate libero. 
                Ullamcorper leo id et in luctus eget. At convallis vitae felis turpis vulputate. </p>
            </div>

        </motion.div>
    )
}

export default AtelierDescription