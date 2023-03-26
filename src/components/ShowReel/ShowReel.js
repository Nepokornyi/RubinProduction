import React, {useState} from 'react'

import { createUseStyles } from 'react-jss'

import Atelier1 from '../../assets/img/atelier1.png'
import Atelier2 from '../../assets/img/atelier2.png'

const useStyle = createUseStyles({
	// slider:{
	// 	color: 'white',
	// 	// border: '1px solid red',
	// 	width: '90%',
	// 	position: 'relative'
	// },
	image:{
		width: '100%',
	},
	// arrow:{
	// 	border: '2px solid white',
	// 	borderWidth: '0 3px 3px 0',
	// 	display: 'inline-block',
	// 	padding: '8px',
	// 	position: 'absolute',
	// 	cursor: 'pointer'
	// },
	// top:{
	// 	top: '-25px',
	// 	left: '50%',
	// 	transform: 'rotate(-135deg) translate(0, -50%)'
	// },
	// bottom:{
	// 	bottom: '-25px',
	// 	left: '50%',
	// 	transform: 'rotate(45deg) translate(-50%, 0)'
	// },
})

function ShowReel() {

	const items = [
	{id: 0, content: () => <img src={Atelier1} alt="" className={style.image} />},
	{id: 1, content: () => <img src={Atelier2} alt="" className={style.image} />},
	{id: 2, content: () => <img src={Atelier2} alt="" className={style.image} />},
	{id: 3, content: () => <img src={Atelier2} alt="" className={style.image} />},
	{id: 4, content: () => <img src={Atelier2} alt="" className={style.image} />},
	{id: 5, content: () => <img src={Atelier2} alt="" className={style.image} />}
	]

	const style = useStyle()
	// const [current, setCurrent] = useState(0);
	// const length = items.length

	// const nextSlide = () => {
	// 	// setCurrent(current === length - 1 ? 0 : current + 1);
	// 	setCurrent(current + 1)
	// }
	// const prevSlide = () => {
	// 	// setCurrent(current === 0 ? length - 1 : current - 1);
	// 	setCurrent(current - 1)
	// }
	// if(!Array.isArray(items)|| items.length <= 0){
	// 	return null;
	// }


	// const carouselItems = items.map((props) =>
	// 	<div className={props === current ? style.atelierActive : style.atelierWrapper} key={props.id}>
	// 		<img src={props.link} alt="" className={style.image} />
	// 	</div>
	// )

	return (
	<>

	</>
	// <section className={style.slider}>
	// 	<span className={`${style.arrow} ${style.top}`} onClick={prevSlide} ></span>
	// 	<span className={`${style.arrow} ${style.bottom}`} onClick={nextSlide} ></span>
	// 	{carouselItems}
	// </section>
	)
}

export default ShowReel