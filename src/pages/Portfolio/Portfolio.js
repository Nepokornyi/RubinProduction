import React from 'react'
import CarouselGrid from '../../components/Carousel/CarouselGrid'
import Content from '../../components/Content/Content'

import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
	portfolioContainer:{
		width: '100%',
		height: '100%',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		// borderBottom: '1px solid var(--secondary-text-color)'
	},
	headerWrapper:{
		width: '100%',
		height: '20%',
		minHeight: '80px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'@media(max-width: 800px)':{
			height: '10%',
		}
	},
	header:{
		fontSize: '64px',
		height: '10vh',
		textAlign: 'center',
		position: 'relative',
		margin: '10px 0 25px 0',
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
			fontSize: '52px',
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
	responsive:{
		minHeight: '775px'
	}
})

function Portfolio() {

  const style = useStyle()

	return (
		<Content className={style.responsive}>
			<div 
			id="Portfolio" 
			className={style.portfolioContainer}>
				<div className={style.headerWrapper}>
					<h2 className={style.header}>Portfolio</h2>
				</div>
				<CarouselGrid />
			</div>
		</Content>
	)
}

export default Portfolio