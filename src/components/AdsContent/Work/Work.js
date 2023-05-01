import React from 'react'


import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { createUseStyles } from 'react-jss'

import pictureWork1 from '../../../assets/img/work1.png'
import pictureWork2 from '../../../assets/img/work2.png'
import pictureWork3 from '../../../assets/img/work3.png'
import pictureWork4 from '../../../assets/img/work4.png'


const useStyle = createUseStyles({
    projectVideo: {
        minWidth: '300px',
        minHeight: '250px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '0.5px solid var(--secondary-text-color)',
        '@media(max-width:600px)':{
            border: 'none'
        }
    },
    image: {
        position: 'absolute',
        objectFit: 'cover',
        width: '100%',
        height: '100%'
    },
    text: {
        display: 'flex',
        minWidth: '225px',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        '& h3':{
            fontSize: '22px',
            color: 'var(--secondary-text-color)',
            marginBottom:0,
        },
        '& p':{
            marginTop: '10px',
            fontSize: '17px'
        }
    }
})

function Work() {
    const items = [
        {   id: 1,
            type: 'text',
            title: 'NO CHARGE FOR EQUIPMENT',
            description: 'Let us help you to discover high-quality world of content'
        },
        {   id: 2,
            type: 'picture',
            link: pictureWork1
        },
        {   id: 3, 
            type: 'picture',
            link: pictureWork2
        },
        {   id: 4, 
            type: 'text',
            title: 'SHOOTING CREW',
            description: 'Gaffers, Assistance, CameraOperator and even Director. Everyone on board!'
        },
        {   id: 5, 
            type: 'text',
            title: 'WORKFLOW',
            description: 'With us you will understand each step in production process. Prepare your questions!'
        },
        {   id: 6, 
            type: 'picture',
            link: pictureWork3
        },
        {   id: 7, 
            type: 'picture',
            link: pictureWork4
        },
        {   id: 9, 
            type: 'text',
            title: 'CONTENT DELIVERY',
            description: 'At the end you will get huge amount of content. Together we will cover all your needs!'
        },
    ]
        const style = useStyle()
    
        const sliderSettings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1500,
            pauseOnFocus: true,
            swipeToSlide: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            rows: 2,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }

        const carouselItems = items.map((props) => 
        <div key={props.id}>
            <div className={style.projectVideo} >
            {props.type === 'picture' &&
                <img className={style.image} src={props.link} alt={props.type} />
            }

            {props.type === 'text' &&
                <div className={style.text}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            }
            
            </div>
        </div>
        );
    
      return (
        <>
            <div style={{width: '100%', height: '70%'}}>
                <Slider {...sliderSettings}>
                    {carouselItems}
                </Slider>
            </div>
        </>
      )
}

export default Work