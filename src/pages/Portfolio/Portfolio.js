import React from 'react'
import CarouselGrid from '../../components/Carousel/CarouselGrid'
import Content from '../../components/Content/Content'

import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'

const useStyle = createUseStyles({
  portfolioContainer:{
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

function Portfolio() {

  const style = useStyle()

	return (
		<Content>
			<motion.div 
			id="Portfolio" 
			className={style.portfolioContainer}
			initial={{opacity: 0}}
			whileInView={{opacity: 1}}
			transition={{duration:1, ease: 'easeOut'}}>
			<CarouselGrid />
			</motion.div>
		</Content>
	)
}

export default Portfolio