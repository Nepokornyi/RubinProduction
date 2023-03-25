import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';

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
        width: '100vw',
        minHeight: '65px',
        backgroundColor: 'var(--main-bg-color-dark)',
        borderBottom: '1px solid var(--secondary-bg-color-dark)',
        zIndex: '5',
        '& a': {
            textDecoration: 'none',
            color: 'var(--main-text-color-light)'
        }
    },
    list: {
        display: 'flex',
        gap: '25px',
        listStyleType: 'none',
        listStylePosition: 'inside',
        textTransform: 'uppercase'
    },
    mobileHeader: {
        marginLeft: '30px',
    },
    contact: {
        width: '130px',
        height: '30px',
        marginRight: '30px',
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
        margin: '0px'
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
        cursor: 'pointer',
        '&:hover': {
            color: 'var(--hover-text-color)',
            transitionDuration: '350ms'
        }
    }
});

function Header() {

  const [sideMenu, setSideMenu] = useState(false);
  const isMobile = useMediaQuery({query: '(max-width:600px)'});
  const isTablet = useMediaQuery({query: '(min-width:900px)'});

  const style = useStyles();

  const handleOpenMenu = () => { setSideMenu(true); }
  const handleCloseMenu = () => { setSideMenu(false); }
  const handleRedirect = () => { setSideMenu(false) }

  const scrollWithOffset = (el) => {
    const yCoords = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = 10;
    window.scrollTo({ top: yCoords - yOffset, behavior: 'smooth' }); 
  }
  return (
    <>
        <nav className={style.header}>
        {!isMobile &&
            <ul className={style.list}>
                <HashLink smooth to="/#About" scroll={el => scrollWithOffset(el)}><li className={style.listItem}>About</li></HashLink>
                <HashLink smooth to="/#Portfolio" scroll={el => scrollWithOffset(el)}><li className={style.listItem}>Portfolio</li></HashLink>
                <HashLink smooth to="/#Atelier" scroll={el => scrollWithOffset(el)}><li className={style.listItem}>Atelier</li></HashLink>
            </ul>
        }
        {isTablet && <HashLink to="/#" scroll={el => scrollWithOffset(el)}><h2 className={style.menuHeader}>Nikita Rubin</h2></HashLink>}
        {isMobile &&
            <div className={style.mobileHeader}>
                {sideMenu === false ? <img src={icoHamburger} onClick={handleOpenMenu} alt="" /> : <img src={icoClose} onClick={handleCloseMenu} alt="" />}
                {sideMenu &&
                    <div className={style.sideMenu}>
                        <ul className={style.dropDownList}>
                        <HashLink to="/#About" scroll={el => scrollWithOffset(el)}><li className={style.listItem} onClick={handleRedirect}>About</li></HashLink>
                        <HashLink to="/#Portfolio" scroll={el => scrollWithOffset(el)}><li className={style.listItem} onClick={handleRedirect}>Portfolio</li></HashLink>
                        <HashLink to="/#Atelier" scroll={el => scrollWithOffset(el)}><li className={style.listItem} onClick={handleRedirect}>Atelier</li></HashLink>
                        </ul>
                    </div>
                }
            </div>
        }
            <HashLink to="/#Contact" scroll={el => scrollWithOffset(el)}><button className={style.contact}>Contact</button></HashLink>
        </nav>
    </>
  )
}

export default Header