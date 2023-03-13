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
    position: 'relative',
    '&>div:nth-child(2)': {
        backgroundColor: 'black',
        '&:before':{
        content: '""',
        position: 'absolute',
        left: '5px',
        width: '8px',
        height: '117vh',
        order: '2',
        backgroundImage: `url(${Tape})`,
            transform: 'scale(0.85)',
            '@media (max-width:600px)':{
                display: 'none'
            }
        }
    }
  }
})

function Atelier() {

  const style = useStyle();

return (
	<Content>
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