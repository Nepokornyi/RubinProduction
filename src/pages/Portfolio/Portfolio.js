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
		justifyContent: 'center'
	},
	header:{
		fontSize: '64px',
		height: '10vh',
		textAlign: 'center',
		position: 'relative',
		margin: '10px 0 25px 0',
		textTransform: 'uppercase',
		'&:after':{
			content: "'X'",
			position: 'absolute',
			top: '15px',
			left: '80px',
			rotate: '-15deg',
			color: 'var(--secondary-text-color)',
			fontSize: '36px',
			fontWeight: '500'
		},
		'&:before':{
			content: "'X'",
			position: 'absolute',
			top: '-5px',
			right: '100px',
			rotate: '-13deg',
			color: 'var(--secondary-text-color)',
			fontSize: '52px',
			fontWeight: '500'
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
			<h2 className={style.header}>Portfolio</h2>
			<CarouselGrid />
			</div>
		</Content>
	)
}

export default Portfolio