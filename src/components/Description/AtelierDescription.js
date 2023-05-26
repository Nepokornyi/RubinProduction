import React from 'react'
import { HashLink } from 'react-router-hash-link';

import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'

const useStyle = createUseStyles({
    description:{
        position: 'relative',
        height: '100vh',
        width: '80%',
        minWidth: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        '@media(max-width:800px)':{
            textAlign: 'center',
            height: 'auto'
        }
    },
    header: {
        fontSize: '56px',
        textAlign: 'center',
        position: 'relative',
        textTransform: 'uppercase',
        marginTop: '30px',
        fontWeight: '700',
        zIndex: 1,
        margin: 0,
        '@media (max-width:1000px)': {
            fontSize: '46px'
        },
        '&:after':{
            content: "'X'",
            position: 'absolute',
            bottom: '5px',
            right: '-10px',
            rotate: '15deg',
            color: 'var(--secondary-text-color)',
            fontSize: '30px',
            fontWeight: 300,
            zIndex: -1
        },
        '&:before':{
            content: "'X'",
            position: 'absolute',
            top: '-10px',
            left: '10px',
            rotate: '-15deg',
            color: 'var(--secondary-text-color)',
            fontSize: '48px',
            fontWeight: 300,
            zIndex: -1
        },
    },
    subHeader:{
        fontSize: '22px',
        fontWeight: '700',
        textTransform: 'uppercase',
        margin: '18px 0 0 0',
        '& > span': {
            color: 'var(--secondary-text-color)'
        },
        '@media (max-width:900px)':{
            fontSize: '18px'
        }
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: '20px 0',
        fontSize: '18px',
        '@media (max-width:1000px)': {
            fontSize: '16px'
        },
        '& > li':{
            marginBottom: '10px',
            fontWeight: '500'
        }
    },
    info:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '400px',
        minWidth: '350px',
    },
    contact:{
		width: '200px',
		height: '50px',
		fontSize: '16px',
        marginBottom: '30px',
		backgroundColor: 'var(--main-bg-color-dark)',
		color: 'var(--main-text-color-light)',
		textTransform: 'uppercase',
		border: '1px solid var(--main-bg-color-light)',
		transitionDuration: '350ms',
		cursor: 'pointer',
        fontWeight: '700',
		'&:hover': {
			backgroundColor: 'var(--main-bg-color-light)',
			border: '1px solid var(--main-bg-color-dark)',
			color: 'var(--main-text-color-dark)',
			transitionDuration: '350ms'
		},
	},
})

function AtelierDescription() {

    const style = useStyle();
    const { t } = useTranslation();

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
            <h2 className={style.header} dangerouslySetInnerHTML={{ __html: t('page.atelier.heading') }}></h2>
            <div className={style.info}>
                <h4 className={style.subHeader} dangerouslySetInnerHTML={{ __html: t('page.atelier.subheading') }}></h4>
                <ul className={style.list}>
                    <li>{t('page.atelier.description')}</li>
                    <li dangerouslySetInnerHTML={{ __html: t('page.atelier.pricing') }}></li>
                </ul>
                <HashLink 
                    smooth to="/#Contact" 
                    scroll={el => scrollWithOffset(el)}>
                        <button className={style.contact}>{t('page.atelier.call_to_action')}</button>
                </HashLink>
            </div>

        </motion.div>
    )
}

export default AtelierDescription