import React from 'react'
import CarouselGrid from '../../components/Carousel/CarouselGrid'
import Content from '../../components/Content/Content'

import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next'

const useStyle = createUseStyles({
	portfolioContainer:{
		width: '100%',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottom: '1px solid var(--secondary-text-color)',
	},
	headerWrapper:{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header:{
		fontSize: '64px',
		textAlign: 'center',
		position: 'relative',
		margin: '25px 0',
		textTransform: 'uppercase',
		fontWeight: '700',
		zIndex: 1,
		'&:after':{
			content: "'X'",
			position: 'absolute',
			top: '15px',
			left: '60px',
			rotate: '-15deg',
			color: 'var(--secondary-text-color)',
			fontSize: '36px',
			fontWeight: '500',
			zIndex: -1
		},
		'&:before':{
			content: "'X'",
			position: 'absolute',
			top: '-10px',
			right: '90px',
			rotate: '-13deg',
			color: 'var(--secondary-text-color)',
			fontSize: '56px',
			fontWeight: '300',
			zIndex: -1
		},
		'@media(max-width:700px)':{
			fontSize: '46px',
			'&:after':{
				top: '5px',
				left: '70px',
			},
			'&:before':{
				top: '0',
				right: '80px',
				fontSize: '48px'
			},
		}
	},
})

function Portfolio() {

  const style = useStyle();
  const { t } = useTranslation();

	return (
		<Content className={style.responsive}>
			<div id="Portfolio" className={style.portfolioContainer}>
				<div className={style.headerWrapper}>
					<h2 className={style.header}>{t('page.portfolio.heading')}</h2>
				</div>
				<CarouselGrid />
			</div>
		</Content>
	)
}

export default Portfolio