import React from 'react'
import Content from '../Content/Content'

import { createUseStyles } from 'react-jss'
import icoIndoor from '../../assets/img/icoIndoor.svg'

const useStyle = createUseStyles({
    container:{
        display: 'flex',
        minWidth: '400px',
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
        maxWidth: '350px'
    },
    header:{
		fontSize: '64px',
		textAlign: 'center',
		position: 'relative',
		margin: '10px 0 25px 0',
		textTransform: 'uppercase',
		'&:after':{
			content: "'X'",
			position: 'absolute',
			top: '0px',
			right: '-10px',
			rotate: '-15deg',
			color: 'var(--secondary-text-color)',
			fontSize: '48px',
			fontWeight: '400'
		},
		'@media(max-width:700px)':{
			fontSize: '52px',
			'&:after':{
				top: '5px',
				left: '70px',
			}
		}
	},
    subHeader:{
        color: 'var(--secondary-text-color)'
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

    return (
        <Content className={style.shortContent}>
            <h2 className={style.header}>FIRST SHOOTING</h2>
            <div className={style.container}>
                <img src={icoIndoor} alt='Starter Pack icon' className={style.image} />
                <div className={style.description}>
                    <h3 className={style.subHeader}>STARTER PACK</h3>
                    <p>Give us a change to be
                        your external production service
                        Price: 10.000kč</p>
                </div>
            </div>

        </Content>
    )
}

export default Offer