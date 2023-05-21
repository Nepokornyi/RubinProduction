import React, { useState } from 'react';

import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion'
import { container, item } from '../../libs/animation';
import { Link as ScrollLink} from 'react-scroll'

import { useTranslation } from 'react-i18next';

import icoHamburger from '../../assets/img/icoBurger.svg'
import icoClose from '../../assets/img/icoClose.svg'
import {ReactComponent as IcoLanguage} from '../../assets/img/icoLanguage.svg'

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
        zIndex: 10,
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
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: '5'
    },
    dropDownList: {
        listStyleType: 'none',
        listStylePosition: 'inside',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        textTransform: 'uppercase',
    },
    listItem: {
        transitionDuration: '350ms',
        margin: '10px 0',
        fontWeight: 700,
        cursor: 'pointer',
        '&:hover': {
            color: 'var(--hover-text-color)',
            transitionDuration: '350ms'
        }
    },
    menuLanguageList: {
        listStyle: 'none',
        paddingLeft: '25px',
        margin: 0,
    },

    changeLanguage: {
        width: '24px', 
        height: '24px', 
        marginRight: '25px', 
        cursor: 'pointer',
        transition: '350ms ease',
        '&:hover':{
            color: 'var(--hover-text-color)'
        }
    },
    rightPanel: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    languageDropdown: {
        position: 'absolute',
        top: '48.5px',
        left: '-12px',
        width: '50px',
        height: '75px',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: '5'
    },
    languageList: {
        width: '100%',
        height: '100%',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        cursor: 'pointer',
        '& > li': {
            color: 'var(--main-text-color-light)',
            transition: 'color 350ms ease',
            '&:hover': {
                color: 'var(--hover-text-color)',
            }
        }
    },

    adsMenu: {
        '@media(max-width:700px)':{
            fontSize: '13.5px'
        }
    }
});

function Header({ ads }) {

  const [sideMenu, setSideMenu] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);
  const isMobile = useMediaQuery({query: '(max-width:700px)'});

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    toggleLanguageMenu();
    setSideMenu(false);
    i18n.changeLanguage(language);
  }

  const style = useStyles();

  const handleOpenMenu = () => { setSideMenu(true); }
  const handleCloseMenu = () => { setSideMenu(false); }
  const toggleLanguageMenu = () => { setLanguageMenu(!languageMenu) }
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
                    ><motion.li variants={item} className={`${style.listItem} ${style.adsMenu}`}>{t('header_ads.brand')}</motion.li>
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
                    ><motion.li variants={item} className={style.listItem}>{t('header.menu.menu_showreel')}</motion.li>
                    </ScrollLink>
                    <ScrollLink 
                        to="Services" 
                        spy={true}
                        smooth={true} 
                        offset={-10}
                    ><motion.li variants={item} className={style.listItem}>{t('header.menu.menu_services')}</motion.li>
                    </ScrollLink>
                    <ScrollLink 
                        to="Atelier" 
                        spy={true}
                        smooth={true} 
                        offset={-10}
                        ><motion.li variants={item} className={style.listItem}>{t('header.menu.menu_atelier')}</motion.li>
                    </ScrollLink>
                    <ScrollLink 
                        to="Portfolio" 
                        spy={true}
                        smooth={true} 
                        offset={-10}
                        ><motion.li variants={item} className={style.listItem}>{t('header.menu.menu_portfolio')}</motion.li>
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
                                to="ShowReel"
                                spy={true}
                                smooth={true} 
                                offset={-10}
                            >
                                <li className={style.listItem} onClick={handleRedirect}>{t('header.menu.menu_showreel')}</li>
                            </ScrollLink>
                            <ScrollLink 
                                to="Services" 
                                spy={true}
                                smooth={true} 
                                offset={-10}
                            >
                                <li className={style.listItem} onClick={handleRedirect}>{t('header.menu.menu_services')}</li>
                            </ScrollLink>
                            <ScrollLink 
                                to="Atelier" 
                                spy={true}
                                smooth={true} 
                                offset={-10}
                            >   
                                <li className={style.listItem} onClick={handleRedirect}>{t('header.menu.menu_atelier')}</li>
                            </ScrollLink>
                            <ScrollLink 
                                to="Portfolio" 
                                spy={true}
                                smooth={true} 
                                offset={-10}
                            >   
                                <li className={style.listItem} onClick={handleRedirect}>{t('header.menu.menu_portfolio')}</li>
                            </ScrollLink>
                                <li className={style.listItem}>
                                    <IcoLanguage className={style.changeLanguage} onClick={toggleLanguageMenu} />
                                </li>
                                {languageMenu &&
                                    <ul className={style.menuLanguageList}>
                                    <li className={style.listItem} onClick={() => {changeLanguage('cs')}}>{t('language.cz')}</li>
                                        <li className={style.listItem} onClick={() => {changeLanguage('en')}}>{t('language.en')}</li>
                                    </ul>
                                }
                            </ul>
                        </div>
                    }
                </div>
            }
        </>
        }
            <motion.div 
                className={style.rightPanel}
                initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:2, ease: 'backIn'}}>
                {!isMobile && (
                <>
                    <IcoLanguage className={style.changeLanguage} onClick={toggleLanguageMenu} />
                    {languageMenu && (
                        <div className={style.languageDropdown}>
                            <ul className={style.languageList}>
                                <li onClick={() => {changeLanguage('cs')}}>{t('language.cz')}</li>
                                <li onClick={() => {changeLanguage('en')}}>{t('language.en')}</li>
                            </ul>
                        </div>
                    )}
                </>
                )}
                <ScrollLink 
                    to={ads ? "AdsContact" : "Contact"}
                    spy={true}
                    smooth={true}
                    style={{marginRight: '35px'}}
                    offset={-10}>
                    <button className={style.contact}>{t('header.menu.menu_contact')}</button>
                </ScrollLink>
            </motion.div>
        </motion.nav>
    </>
  )
}

export default Header