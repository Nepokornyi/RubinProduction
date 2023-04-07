import React from 'react'

import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Portrait from '../../assets/img/portrait_1.webp'
import Small from '../../assets/img/2-small.webp'
import Content from '../../assets/img/content_5.webp'

const useStyle = createUseStyles({
	container:{
		width: '90%',
		'@media(min-width:801px)':{
			"& .slick-dots":{
				top:0,
				width: '15px',
				height: '100%',
				right: '-15px',
				display: 'flex !important',
				flexDirection: 'column',
				justifyContent: 'center'
			}
		}

	},
	slider:{
		color: 'white',
		width: '100%',
		height: '80%',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	slide:{
		minHeight: '40vh',
		display: 'flex', 
		justifyContent: 'center',
		margin: '5px',
		'& > p':{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translate(-50%)'
		},
		'@media(max-width:800px)':{
			height: '75vh',
		}
	},
	image:{
		width: '100%',
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

	const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1000,
        speed: 1250,
        pauseOnFocus: true,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2,
        arrows: false,
		vertical: true,
		verticalSwiping: true,
        responsive: [
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 1,
					rows: 1,
					vertical: false,
					verticalSwiping: false,
                }
            }
        ]
    }

	const style = useStyle()

	const content = items.map(item => {
		return(
			<div key={item.id}>
				<div className={style.slide}>
					<img src={item.link} alt="" className={style.image} />
				</div>
			</div>
		)
	})

	return (
	<>
		<motion.div 
			className={style.container}
			initial={{opacity: 0}}
			whileInView={{opacity: 1}}
			transition={{duration:1, ease: 'easeInOut'}}>
			<Slider {...sliderSettings}>
				{content}
			</Slider>
		</motion.div>
	</>
	)
}

export default ShowReel