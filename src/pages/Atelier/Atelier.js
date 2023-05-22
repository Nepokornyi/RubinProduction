import React from 'react'

import Content from '../../components/Content/Content'
import Description from '../../components/Description/Description'
import AtelierDescription from '../../components/Description/AtelierDescription'
import ShowReel from '../../components/ShowReel/ShowReel'

import Tape from '../../assets/img/tape.svg'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
  atelierContainer:{
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: 'var(--main-bg-color-light)',
    color: 'var(--main-text-color-dark)',
    '&>div:nth-child(2)': {
        backgroundColor: 'var(--main-bg-color-dark)',
        '&:before':{
        content: '""',
        position: 'absolute',
        left: '5px',
        width: '8px',
        height: '117%',
        order: '2',
        backgroundImage: `url(${Tape})`,
            transform: 'scale(0.85)',
            '@media (max-width:800px)':{
                display: 'none'
                }
            }
        }
    },
    expandContent:{
        minHeight: '600px',
        '@media(max-width:800px)':{
            minHeight: '1200px'
        },
    }
})

function Atelier() {

  const style = useStyle();

return (
	<Content className={style.expandContent}>
		<div id="Atelier" className={style.atelierContainer}>
			<Description>
				<AtelierDescription />
			</Description>
			<Description>
				<ShowReel />
			</Description>
		</div>
	</Content>
)
}

export default Atelier