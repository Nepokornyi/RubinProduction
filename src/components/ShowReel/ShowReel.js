import React from 'react'

import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import LazyImage from '../LazyHash/LazyImage';

import Atelier1 from '../../assets/img/01_Atelier.webp'
import Atelier2 from '../../assets/img/02_Atelier.webp'
import Atelier3 from '../../assets/img/03_Atelier.webp'
import Atelier4 from '../../assets/img/04_Atelier.webp'
import Atelier5 from '../../assets/img/05_Atelier.webp'
import Atelier6 from '../../assets/img/06_Atelier.webp'

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
		position: 'relative',
		height: '45vh',
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
			link: Atelier1,
			blurHash: 'L36*L4xa009sNh%3M^NF00bJ~Es*'
		},
		{   id: 2, 
			link: Atelier2,
			blurHash: 'L1711Z0e00=y00?HL1WAysD*wIOX'
		},
		{   id: 3, 
			link: Atelier3,
			blurHash: 'L28XFJ4T00*000.8yXe..8E1^+Vr'
		},
		{   id: 4, 
			link: Atelier4,
			blurHash: 'L45#FmRk0wnh4qofoYxZ~WRjIpRk'
		},
		{   id: 5, 
			link: Atelier5,
			blurHash: 'L28XFJ4T00*000.8yXe..8E1^+Vr'
		},
		{   id: 6, 
			link: Atelier6,
			blurHash: 'L28gy]4T00*000.8yXae.8E1^+Vr'
		},
	]

	const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
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
					<LazyImage src={item.link} alt="" blurHash={item.blurHash} className={style.image} />
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