import React from 'react'

import { createUseStyles } from 'react-jss'

import icoPreProd from '../../assets/img/icoPreProd.svg'
import icoIndoor from '../../assets/img/icoIndoor.svg'
import icoOutdoor from '../../assets/img/icoOutdoor.svg'
import icoPostProd from '../../assets/img/icoPostProd.svg'
import icoProd from '../../assets/img/icoProd.svg'

const useStyle = createUseStyles({
    content:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        minHeight: '320px',
        height: '80%',
        '@media(max-width: 800px)':{
			height: '90%',
		}
    },
    card:{
        height: '265px',
        flex: '0 0 calc(33.33% - 20px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        '@media(max-width:800px)':{
            minWidth: '280px',
            flex: '0 0 calc(40% - 20px)',
        },
        '@media(max-width:600px)':{
            flex: '0 0 calc(60% - 20px)',
        }
    },
    image:{
        width: '150px',
        height: '150px',
        position: 'relative',
    },
    addX:{
        position: 'relative',
        '&:after':{
			content: "'X'",
			position: 'absolute',
			top: '22px',
			left: '26px',
			rotate: '15deg',
			color: 'var(--secondary-text-color)',
			fontSize: '48px',
			fontWeight: '200',
		},
    },
    title:{
        color: 'var(--secondary-text-color)',
        margin: 0,
    }
})

function ServiceInformation() {

    const style = useStyle();

    const items = [
        {id: 1, icon: icoPreProd, title: 'PRE-PRODUCTION', description: "Let's plan everything in front: script, schedule and logistics or even catering"},
        {id: 2, icon: icoProd, title: 'PRODUCTION', description: 'Production crew, assistance and directing during the shoot for stunning results'},
        {id: 3, icon: icoPostProd, title: 'POST-PRODUCTION', description: 'Leave your content to professionals. We are capable of editing, creating graphics, motion elements and sound-design'},
        {id: 4, icon: icoIndoor, title: 'IN-DOOR SHOOTING', description: 'Interested in full-service shooting at Atelier? Price: from 5.000kč'},
        {id: 5, icon: icoOutdoor, pseudoClass: true, title: 'OUT-DOOR SHOOTING', description: 'We are able to bring crew and equipment even to your location. Price: from 7.500kč'}
    ]

    const services = items.map((props) => 
        <div key={props.id} className={style.card}>
            <div className={props.pseudoClass && style.addX}>
                <img src={props.icon} alt={props.title} className={style.image} />
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )

    return (
        <div className={style.content}>
            {services}
        </div>
    )
}

export default ServiceInformation