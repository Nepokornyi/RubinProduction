import React from 'react'
import Content from '../Content/Content'

import { createUseStyles } from 'react-jss'
import { useMediaQuery } from 'react-responsive'
import icoIndoor from '../../assets/img/icoIndoor.svg'

const useStyle = createUseStyles({
    container:{
        display: 'flex',
        height: '70%',
        minWidth: '300px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        '@media(max-width:600px)':{
            flexDirection: 'column'
        }
    },
    image:{
        width: '200px',
        height: '200px'
    },
    description:{
        minWidth: '200px',
        maxWidth: '350px',
        '& > p':{
            marginTop: '10px'
        }
    },
    headerWrapper:{
        width: '100%',
		height: '30%',
		minHeight: '80px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottom: '1px solid var(--secondary-text-color)',
    },
    header:{
		fontSize: '64px',
		textAlign: 'center',
		position: 'relative',
		margin: '10px 0 25px 0',
		textTransform: 'uppercase',
        fontWeight: 700,
        wordWrap: 'break-word',
        zIndex: 1,
		'&:after':{
			content: "'X'",
			position: 'absolute',
			top: '0px',
			right: '-10px',
			rotate: '-15deg',
			color: 'var(--secondary-text-color)',
			fontSize: '48px',
			fontWeight: '400',
            zIndex: -1,
            '@media(max-width:600px)':{
				top: '15px',
				right: '55px'
			}
		},
		'@media(max-width:700px)':{
			fontSize: '52px'
		}
	},
    subHeader:{
        color: 'var(--secondary-text-color)',
        margin:0,
        fontWeight: 700
    },

    shortContent:{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '500px',
        height: '60vh',
        '@media(max-width:600px)':{
            height: '100vh'
        }
    }

})

function Offer() {

    const style = useStyle()

    const isMobile = useMediaQuery({query: '(max-width:600px)'});

    return (
        <Content className={style.shortContent}>
            <div className={style.headerWrapper}>
                <h2 className={style.header}>FIRST {isMobile && <br/>} SHOOTING</h2>
            </div>
            <div className={style.container}>
                <img src={icoIndoor} alt='Starter Pack icon' className={style.image} />
                <div className={style.description}>
                    <h3 className={style.subHeader}>STARTER PACK</h3>
                    <p>Give us a change to be
                        your external production service<br />
                        <strong>Price:</strong> 10.000kč</p>
                </div>
            </div>

        </Content>
    )
}

export default Offer