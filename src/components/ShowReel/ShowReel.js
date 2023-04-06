import React from 'react'

import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useMediaQuery } from 'react-responsive'

import '@splidejs/splide/css';


import Portrait from '../../assets/img/portrait_1.webp'
import Small from '../../assets/img/2-small.webp'
import Content from '../../assets/img/content_5.webp'

const useStyle = createUseStyles({
	slider:{
		color: 'white',
		width: '100%',
		height: '80%',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'@media(max-width:600px)':{
			'& .splide':{
				padding: '30px 0'
			}
		}
	},
	slide:{
		display: 'flex', 
		justifyContent: 'center',
		'& > p':{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translate(-50%)'
		}
	},
	image:{
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		cursor: 'pointer',
		overflow: 'hidden',
	},
	
})

function ShowReel() {

	const items = [
		{   id: 1, 
			link: Portrait,
		},
		{   id: 2, 
			link: Small,
		},
		{   id: 3, 
			link: Content,
		},
		{   id: 4, 
			link: Portrait,
		},
		{   id: 5, 
			link: Content,
		},
		{   id: 6, 
			link: Small,
		},
	]
	const isMobile = useMediaQuery({query: '(max-width:700px)'});
    const isLaptop = useMediaQuery({query: '(min-width:701px)'});

	const style = useStyle()

	const content = items.map(item => {
		return(
			<SplideSlide key={item.id} className={style.slide}>
				<img src={item.link} alt="" className={style.image} />
			</SplideSlide>
		)
	})

	return (
	<>
		{isLaptop && 
			<motion.section 
				className={style.slider}
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				transition={{duration:1, ease: 'easeInOut'}}>
				<Splide
					options={{
						type: 'loop',
						perPage: 2,
						direction: 'ttb',
						height: '80vh',
						width: '70vw',
						autoplay: true,
						pagination: true,
						interval: 2750,
						speed: 2000,
						arrows: false,
						gap: '25px',
						drag: true
					}}
				>
					{content}
				</Splide>
			</motion.section>
		}
		{isMobile &&
			<motion.section 
				className={style.slider}
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				transition={{duration:1, ease: 'easeInOut'}}>
				<Splide
					options={{
						type: 'loop',
						perPage: 1,
						perMove: 1,
						direction: 'ltr',
						height: '70vh',
						width: '90vw',
						autoplay: true,
						pagination: true,
						interval: 2750,
						speed: 2000,
						focus: 'center',
						gap: '50px',
						arrows: false,
						drag: {
							y: false,
							x: true
						}
					}}
				>
					{content}
				</Splide>
			</motion.section>
		}
	</>
	)
}

export default ShowReel