import React, { useState } from 'react';

import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion'
import { container, item } from '../../libs/animation';
import { Link as ScrollLink} from 'react-scroll'

import icoHamburger from '../../assets/img/icoBurger.svg'
import icoClose from '../../assets/img/icoClose.svg'

const useStyles = createUseStyles({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '65px',
        backgroundColor: 'var(--main-bg-color-dark)',
        borderBottom: '1px solid var(--secondary-bg-color-dark)',
        zIndex: '5',
        '& a': {
            textDecoration: 'none',
            color: 'var(--main-text-color-light)'
        },
        '@media(max-width:800px)':{
            fontSize: '14px'
        }
    },
    list: {
        display: 'flex',
        gap: '25px',
        marginLeft: '37.5px',
        padding: 0,
        listStyleType: 'none',
        listStylePosition: 'inside',
        textTransform: 'uppercase',
    },
    mobileHeader: {
        marginLeft: '35px',
    },
    contact: {
        width: '130px',
        height: '30px',
        fontWeight: '700',
        backgroundColor: 'var(--main-bg-color-light)',
        color: 'var(--main-text-color-dark)',
        textTransform: 'uppercase',
        border: 'none',
        transitionDuration: '350ms',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'var(--main-bg-color-dark)',
            border: '1px solid var(--main-bg-color-light)',
            color: 'var(--main-text-color-light)',
            transitionDuration: '350ms'
        }
    },
    menuHeader:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        margin: '0px',
        transitionDuration: '350ms',
        '&:hover':{
            color: 'var(--hover-text-color)',
            transitionDuration: '350ms'
        }
    },
    sideMenu: {
        position: 'absolute',
        top: '65px',
        left: '0px',
        width: '200px',
        height: '200px',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: '5'
    },
    dropDownList: {
        listStyleType: 'none',
        listStylePosition: 'inside',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '170px',
        textTransform: 'uppercase',
    },
    listItem: {
        transitionDuration: '350ms',
        fontWeight: 700,
        cursor: 'pointer',
        '&:hover': {
            color: 'var(--hover-text-color)',
            transitionDuration: '350ms'
        }
    },
    adsMenu:{
        '@media(max-width:600px)':{
            fontSize: '13.5px'
        }
    }
});

function Header({ ads }) {

  const [sideMenu, setSideMenu] = useState(false);
  const isMobile = useMediaQuery({query: '(max-width:600px)'});

  const style = useStyles();

  const handleOpenMenu = () => { setSideMenu(true); }
  const handleCloseMenu = () => { setSideMenu(false); }
  const handleRedirect = () => { setSideMenu(false) }

  return (
    <>
        <motion.nav 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:1, ease: 'easeOut'}}
            className={style.header}
        >
        {ads ?
        <>
            <motion.ul 
                    className={style.list} 
                    variants={container}
                    initial='hidden'
                    animate='show'
                >
                    <ScrollLink 
                        to="ShowReel"
                        spy={true}
                        smooth={true}
                        offset={-10}
                    ><motion.li variants={item} className={`${style.listItem} ${style.adsMenu}`}>Rubin Production</motion.li>
                    </ScrollLink>
                </motion.ul>
        </>
        :
        <>
            {!isMobile &&
                <motion.ul 
                    className={style.list} 
                    variants={container}
                    initial='hidden'
                    animate='show'
                >
                    <ScrollLink 
                        to="ShowReel"
                        spy={true}
                        smooth={true} 
                        offset={-10}
                    ><motion.li variants={item} className={style.listItem}>ShowReel</motion.li>
                    </ScrollLink>
                    <ScrollLink 
                        to="Services" 
                        spy={true}
                        smooth={true} 
                        offset={-10}
                    ><motion.li variants={item} className={style.listItem}>Services</motion.li>
                    </ScrollLink>
                    <ScrollLink 
                        to="Atelier" 
                        spy={true}
                        smooth={true} 
                        offset={-10}
                        ><motion.li variants={item} className={style.listItem}>Atelier</motion.li>
                    </ScrollLink>
                    <ScrollLink 
                        to="Portfolio" 
                        spy={true}
                        smooth={true} 
                        offset={-10}
                        ><motion.li variants={item} className={style.listItem}>Portfolio</motion.li>
                    </ScrollLink>
                </motion.ul>
            }
            {isMobile &&
                <div className={style.mobileHeader}>
                    {sideMenu === false ? <img src={icoHamburger} width="28px" height="21px" onClick={handleOpenMenu} alt="" /> : <img src={icoClose} onClick={handleCloseMenu} alt="" />}
                    {sideMenu &&
                        <div className={style.sideMenu}>
                            <ul className={style.dropDownList}>
                            <ScrollLink 
                                to="home"
                                spy={true}
                                smooth={true} 
                                offset={-10}
                            >
                                <li className={style.listItem} onClick={handleRedirect}>ShowReel</li>
                            </ScrollLink>
                            <ScrollLink 
                                to="Services" 
                                spy={true}
                                smooth={true} 
                                offset={-10}
                            >
                                <li className={style.listItem} onClick={handleRedirect}>Services</li>
                            </ScrollLink>
                            <ScrollLink 
                                to="Atelier" 
                                spy={true}
                                smooth={true} 
                                offset={-10}
                            >   
                                <li className={style.listItem} onClick={handleRedirect}>Atelier</li>
                            </ScrollLink>
                            <ScrollLink 
                                to="Portfolio" 
                                spy={true}
                                smooth={true} 
                                offset={-10}
                            >   
                                <li className={style.listItem} onClick={handleRedirect}>Portfolio</li>
                            </ScrollLink>
                            </ul>
                        </div>
                    }
                </div>
            }
        </>
        }
                <ScrollLink 
                    to={ads ? "AdsContact" : "Contact"}
                    spy={true}
                    smooth={true}
                    style={{marginRight: '35px'}}
                    offset={-10}>
                    <motion.button initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:2, ease: 'backIn'}} className={style.contact}>Contact</motion.button>
                </ScrollLink>
        </motion.nav>
    </>
  )
}

export default Header