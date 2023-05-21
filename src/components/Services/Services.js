import React from 'react'

import Content from '../Content/Content'
import ServiceInformation from '../ServiceInformation/ServiceInformation';

import { motion } from 'framer-motion'
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next';

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
        }
    }
});

function Services() {

    const style = useStyle()
	const { t } = useTranslation()

    return (
        <Content className={style.expandContent}>
            <motion.div 
				id="Services" 
				className={style.servicesContainer}
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				transition={{duration: 1, ease: 'easeInOut'}}
			>
				<div className={style.headerWrapper}>
					<h2 className={style.header}>{t('page.services.heading')}</h2>
				</div>

                <ServiceInformation />
            </motion.div>
        </Content>
    )
}

export default Services