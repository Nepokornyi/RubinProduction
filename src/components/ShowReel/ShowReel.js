import React, {useState} from 'react'

import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import '@splidejs/splide/css/sea-green';

import { LazyImage } from 'react-lazy-media'

import Atelier1 from '../../assets/img/atelier1.png'
import Atelier2 from '../../assets/img/atelier2.png'
import Overlay from '../Overlay/Overlay'

const useStyle = createUseStyles({
	slider:{
		color: 'white',
		width: '80%',
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
		opacity: 0.5
	},
	container:{
		position: 'relative'
	},
	overlay:{
        position: 'fixed',
        background: 'rgba(0, 0, 0, 1)',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
        zIndex: 6,
    },
	gridOverlay: {
        background: 'none',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'ease',
        transitionDuration: '350ms',
		'&:hover':{
			background: 'rgba(0,0,0,0.65)',
		},
        '& > button': {
			opacity: 0,
            background: 'none',
            outline: 'none',
            fontWeight: '100',
            letterSpacing: '2px',
            border: '1px solid var(--main-bg-color-light)',
            color: 'white',
            textTransform: 'uppercase',
            cursor: 'pointer',
            padding: '10px',
            transitionDuration: '350ms',
        },
        '& > button:hover': {
            transition: 'ease',
            background: 'var(--main-bg-color-light)',
            color: 'var(--main-text-color-dark)',
            transform: 'scale(1.05)',
            transitionDuration: '350ms'
		},
		'&:hover > button':{
			opacity: 1
		}
    },
    overlayImage: {
        width: '90vw',
        height: '80vh',
        objectFit: 'contain'
    },
	overlayControls:{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	overlayButton: {
		background: 'var(--main-bg-color-light)',
		color: 'var(--main-text-color-dark)',
		outline: 'none',
		fontWeight: '100',
		letterSpacing: '2px',
		border: '1px solid var(--main-bg-color-light)',
		textTransform: 'uppercase',
		cursor: 'pointer',
		padding: '10px',
		transitionDuration: '350ms',
		margin: '5px',
		'&:hover':{
            background: 'var(--main-bg-color-dark)',
            color: 'var(--main-text-color-light)',
            border: '1px solid var(--main-bg-color-light)',
            transitionDuration: '350ms'
		}
	},
	overlayText: {
		color: 'var(--main-text-color-light)',
		marginTop: 0
	}
	
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

	const [image, setImage] = useState('');
	const [currentIndex, setCurrentIndex] = useState(1);
	const [currentDescription, setCurrentDescription] = useState('')
    const [overlay, setOverlay] = useState(false)

	const style = useStyle()

	const handleOpenOverlay = (link, index, description) => {
		setImage(link);
		setCurrentIndex(index);
		setCurrentDescription(description);
		setOverlay(true);
	}
	const handleCloseOverlay = () => {
		setOverlay(false);
	}

	const handleNextSlide = (e) => {
		e.stopPropagation();
        const nextIndex = (currentIndex + 1) % items.length;
        setImage(items[nextIndex].link);
		setCurrentDescription(items[nextIndex].content);
        setCurrentIndex(nextIndex);
	}

	const handlePrevSlide = (e) => {
		e.stopPropagation();
		const prevIndex = (currentIndex - 1 + items.length) % items.length;
        setImage(items[prevIndex].link);
		setCurrentDescription(items[prevIndex].content);
        setCurrentIndex(prevIndex);
	}

	const content = items.map(item => {
		return(
			<SplideSlide key={item.id} className={style.slide}>
				<LazyImage src={item.link} alt="" classes={[style.image]} />
				<p>{item.content}</p>
				<div className={style.gridOverlay} onClick={() => handleOpenOverlay(item.link, item.id, item.content)}>
					<button onClick={() => handleOpenOverlay(item.link)}>view more</button>
				</div>
			</SplideSlide>
		)
	})

	return (
	<>
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
					autoplay: true,
					interval: 2750,
					speed: 2000,
					arrows: true,
					gap: '25px',
					pagination: false,
					drag: false
				}}
			>
				{content}
			</Splide>
		</motion.section>
        {overlay &&
			<Overlay onClose={handleCloseOverlay}>
				<img src={image} className={style.overlayImage} onClick={e => e.stopPropagation()} alt="" />
				<div className={style.overlayControls}>
					<p className={style.overlayText}>{currentDescription}</p>
					<div>
						<button className={style.overlayButton} onClick={(e) => handleNextSlide(e)}>Prev</button>
						<button className={style.overlayButton} onClick={(e) => handlePrevSlide(e)}>Next</button>
					</div>
				</div>

			</Overlay>
        }
	</>
	)
}

export default ShowReel