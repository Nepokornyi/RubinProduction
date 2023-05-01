import React from 'react'

import Content from '../Content/Content'
import ServiceInformation from '../ServiceInformation/ServiceInformation';

import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
    servicesContainer:{
		width: '100%',
		height: '100%',
		paddingBottom: '25px',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerWrapper:{
		width: '100%',
		height: '20%',
		minHeight: '80px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottom: '1px solid var(--secondary-text-color)',
		'@media(max-width: 800px)':{
			height: '10%',
		}
	},
	header:{
		fontSize: '64px',
		textAlign: 'center',
		position: 'relative',
		margin: 0,
		textTransform: 'uppercase',
		fontWeight: '700',
		zIndex: 1,
		'&:before':{
			content: "'X'",
			position: 'absolute',
			top: '0px',
			right: '-25px',
			rotate: '-15deg',
			color: 'var(--secondary-text-color)',
			fontSize: '48px',
			fontWeight: '400',
			zIndex: -1,
		},
		'@media(max-width:700px)':{
			fontSize: '52px',
			'&:before':{
				top: '0px',
				right: '-25px',
			}
		}
	},
    expandContent:{
		minHeight: '700px',
        '@media(max-width:800px)':{
            minHeight: '1450px'
        },
        '@media(max-width:600px)':{
            minHeight: '1700px'
        }
    }
});

function Services() {

    const style = useStyle()

    return (
        <Content className={style.expandContent}>
            <div id="Services" className={style.servicesContainer}>
				<div className={style.headerWrapper}>
					<h2 className={style.header}>Services</h2>
				</div>

                <ServiceInformation />
            </div>
        </Content>
    )
}

export default Services