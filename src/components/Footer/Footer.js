import React from 'react'

import { createUseStyles } from 'react-jss'
import { useMediaQuery } from 'react-responsive'

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
    },
    mainContent:{
        position: 'relative',
        minHeight: '100px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: '0 15px',
    },
    iconsContainer:{
        display: 'flex',
        gap: '20px',
    },
    icons:{
        width: '45px', 
        height: '45px',
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
                <div className={style.iconsContainer}>
                    <IcoInst className={style.icons} />
                    <IcoBe className={style.icons} />
                    <IcoVimeo className={style.icons} />
                </div>
            </div>

            <p className={style.copyright}>© 2023 Nikita Rubin</p>
        </div>
    )
}

export default Footer