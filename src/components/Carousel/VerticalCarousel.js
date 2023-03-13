import React from 'react'

function VerticalCarousel() {
    const SliderData = [
        {image: 'https://picsum.photos/200/300'},
        {image: 'https://picsum.photos/201/300'},
        {image: 'https://picsum.photos/200/301'},
        {image: 'https://picsum.photos/201/301'},
        {image: 'https://picsum.photos/202/300'},
        {image: 'https://picsum.photos/200/302'},
        {image: 'https://picsum.photos/202/302'},
        {image: 'https://picsum.photos/201/302'}
    ]

  return (
    <>
        {SliderData.map((slide, index) => {
            return (
                <img key={index} src={slide.image} alt="" />
            )
        })}
    </>
  )
}

export default VerticalCarousel