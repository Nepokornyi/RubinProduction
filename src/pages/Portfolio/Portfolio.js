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
    alignItems: 'center'
  }
})

function Portfolio() {

  const style = useStyle()

  return (
    <Content>
      <div id="Portfolio" className={style.portfolioContainer}>
        <CarouselGrid />
      </div>
    </Content>
  )
}

export default Portfolio