import React, {useState} from 'react'

import { createUseStyles } from 'react-jss'
import { RemoveScrollBar } from 'react-remove-scroll-bar'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import '@splidejs/react-splide/css'

import Atelier1 from '../../assets/img/atelier1.png'
import Atelier2 from '../../assets/img/atelier2.png'
import Overlay from '../Overlay/Overlay'

const useStyle = createUseStyles({
	slider:{
		color: 'white',
		width: '90%',
		height: '90%',
		position: 'relative',
		overflow: 'hidden'
	},
	image:{
		width: '90%',
		height: '90%',
		objectFit: 'contain',
		cursor: 'pointer',
		overflow: 'hidden'
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
    vimeo: {
        width: '80vw',
        height: '95vh',
        objectFit: 'contain'
    }
})

function ShowReel() {

	const items = [
		{   id: 1, 
			link: Atelier1
		},
		{   id: 2, 
			link: Atelier1
		},
		{   id: 3, 
			link: Atelier2
		},
		{   id: 4, 
			link: Atelier1
		},
		{   id: 5, 
			link: Atelier2
		},
		{   id: 6, 
			link: Atelier2
		},
	]

	const [image, setImage] = useState('');
    const [overlay, setOverlay] = useState(false)

	const style = useStyle()

	const handleOpenOverlay = (link) => {
		setImage(link)
		setOverlay(true)
	}
	const handleCloseOverlay = () => {
		setOverlay(false)
	}

	const content = items.map(item => {
		return(
			<SplideSlide key={item.id} style={{display: 'flex', justifyContent: 'center'}}>
				<img src={item.link} alt="" className={style.image}  />
				<div className={style.gridOverlay} onClick={() => handleOpenOverlay(item.link)}>
					<button onClick={() => handleOpenOverlay(item.link)}>view more</button>
				</div>
			</SplideSlide>
		)
	})

	return (
	<>
		<section className={style.slider}>
			<Splide
				options={{
					type: 'loop',
					perPage: 2,
					direction: 'ttb',
					height: '100vh',
					autoplay: true,
					arrows: false,
					pagination: false,
					speed: 1500,
					lazyLoad: true,
				}}
			>
				{content}
			</Splide>
		</section>
        {overlay &&
                <Overlay onClose={handleCloseOverlay}>
					<img src={image} className={style.vimeo} alt="" />
                </Overlay>
        }
	</>
	)
}

export default ShowReel