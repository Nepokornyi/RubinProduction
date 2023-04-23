import React from 'react'

import Content from '../../components/Content/Content'
import ServiceInformation from '../../components/ServiceInformation/ServiceInformation';

import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
    servicesContainer:{
		width: '100%',
		height: '100%',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
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
    expandContent:{
        '@media(max-width:800px)':{
            minHeight: '1150px'
        },
        '@media(max-width:600px)':{
            minHeight: '1500px'
        }
    }
});

function Services() {

    const style = useStyle()

    return (
        <Content className={style.expandContent}>
            <div id="Services" className={style.servicesContainer}>
                <h2 className={style.header}>Services</h2>
                <ServiceInformation />
            </div>
        </Content>
    )
}

export default Services