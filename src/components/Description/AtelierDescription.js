import React from 'react'
import { HashLink } from 'react-router-hash-link';

import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'

const useStyle = createUseStyles({
    description:{
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
            bottom: '5px',
            right: '35px',
            rotate: '15deg',
            color: 'var(--secondary-text-color)',
            fontSize: '30px',
        },
        '&:before':{
            content: "'X'",
            position: 'absolute',
            top: 0,
            left: '65px',
            rotate: '-15deg',
            color: 'var(--secondary-text-color)',
            fontSize: '30px',
        },
    },
    subHeader:{
        fontSize: '22px',
        '@media (max-width:900px)':{
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
    },
    info:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    request:{
		width: '200px',
		height: '50px',
		fontSize: '16px',
        margin: 'auto',
		backgroundColor: 'var(--main-bg-color-light)',
		color: 'var(--main-text-color-dark)',
		textTransform: 'uppercase',
		border: '1px solid var(--main-bg-color-dark)',
		transitionDuration: '350ms',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: 'var(--main-bg-color-dark)',
			border: '1px solid var(--main-bg-color-light)',
			color: 'var(--main-text-color-light)',
			transitionDuration: '350ms'
		}
	},
})

function AtelierDescription() {

    const style = useStyle()

    const scrollWithOffset = (el) => {
        const yCoords = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = 10;
        window.scrollTo({ top: yCoords - yOffset, behavior: 'smooth' }); 
    }

    return (
        <motion.div 
            className={style.description}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration:1, ease: 'easeInOut'}}>
            <h2 className={style.header}>ATELIER <br /> FOR YOU</h2>
            <div className={style.info}>
                <h4 className={style.subHeader}>Versatile space is equipped with all the tools you need to create stunning content from start to finish.</h4>
                <ul className={style.list}>
                    <li>Atelier is available for hire, offering a versatile and fully equipped environment for your next project.</li>
                    <li>From pre-production and planning to post-production and editing, we'll work closely with you to ensure that every aspect of your project is executed to perfection. With experienced director on hand, you can rest assured that you'll receive the guidance and support you need to create high-quality content that truly stands out</li>
                </ul>
                <HashLink 
                    smooth to="/#Contact" 
                    scroll={el => scrollWithOffset(el)}>
                        <button className={style.request}>Request</button>
                </HashLink>
            </div>

        </motion.div>
    )
}

export default AtelierDescription