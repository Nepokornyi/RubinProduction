import React from 'react'

import { createUseStyles } from 'react-jss'

import {ReactComponent as IcoInst} from '../../assets/img/Inst.svg'
import {ReactComponent as IcoBe} from '../../assets/img/Be.svg'
import {ReactComponent as IcoVimeo} from '../../assets/img/Vimeo.svg'

const useStyle = createUseStyles({
    footer:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid var(--secondary-bg-color-dark)',
        zIndex: '5',
        '@media(max-width:800px)':{
            fontSize: '11px',
        }
    },
    mainContent:{
        position: 'relative',
        minHeight: '100px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 25px',
    },
    information:{
        listStyle: 'none',
        padding: 0,
    },
    iconsContainer:{
        display: 'flex',
        gap: '10px',
    },
    icons:{
        width: '45px', 
        height: '45px',
        '@media(max-width:800px)':{
            width: '35px',
            height: '35px'
        },
        cursor: 'pointer',
        '& path, rect, circle':{
            stroke: 'white',
            transition: 'stroke 0.3s ease',
        },
        '&:hover path, &:hover rect, &:hover circle':{
            stroke: 'var(--secondary-text-color)'
        }
    },
    copyright:{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '12px',
        margin: 0
    }
})

function Footer() {

    const style = useStyle()

    return (
        <div className={style.footer}>
            <div className={style.mainContent}>
                <div>
                    <ul className={style.information}>
                        <li><strong> e-mail:</strong> nikita.rubin@rubinproduction.eu</li>
                        <li><strong>tel:</strong> +420 774 153 845</li>
                    </ul>
                </div>
                <div className={style.iconsContainer}>
                    <a href="https://www.instagram.com/who1snick/" target="_blank" rel="noopener noreferrer"><IcoInst className={style.icons} /></a>
                    <a href="https://www.behance.net/who1snick" target="_blank" rel="noopener noreferrer"><IcoBe className={style.icons} /></a>
                    <a href="https://vimeo.com/who1snick" target="_blank" rel="noopener noreferrer"><IcoVimeo className={style.icons} /></a>
                </div>
            </div>

            {/* <p className={style.copyright}>© 2023 Nikita Rubin</p> */}
        </div>
    )
}

export default Footer