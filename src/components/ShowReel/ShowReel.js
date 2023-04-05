import React, {useState} from 'react'

import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useMediaQuery } from 'react-responsive'

// import '@splidejs/splide/css/sea-green';
import '@splidejs/splide/css';

import { LazyImage } from 'react-lazy-media'

import Atelier1 from '../../assets/img/atelier1.png'
import Atelier2 from '../../assets/img/atelier2.png'
// import Overlay from '../Overlay/Overlay'

const useStyle = createUseStyles({
	slider:{
		color: 'white',
		width: '100%',
		height: '80%',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
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
			link: Atelier1,
			content: 'Hello Content',
			blurhash: 'L5Fr|$_400M|00xuIVD%S0D$tS?b'
		},
		{   id: 2, 
			link: Atelier1,
			content: 'Bye Content',
			blurhash: 'L5Fr|$_400M|00xuIVD%S0D$tS?b'
		},
		{   id: 3, 
			link: Atelier2,
			content: 'Content ?',
			blurhash: 'L5BWb_D$00^,~WIUD%-:IUt8ococ'
		},
		{   id: 4, 
			link: Atelier1,
			content: 'Content Hello',
			blurhash: 'L5Fr|$_400M|00xuIVD%S0D$tS?b'
		},
		{   id: 5, 
			link: Atelier2,
			content: 'Content Bye',
			blurhash: 'L5BWb_D$00^,~WIUD%-:IUt8ococ'
		},
		{   id: 6, 
			link: Atelier2,
			content: 'Content!',
			blurhash: 'L5BWb_D$00^,~WIUD%-:IUt8ococ'
		},
	]
	const isMobile = useMediaQuery({query: '(max-width:600px)'});
    const isLaptop = useMediaQuery({query: '(min-width:601px)'});

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