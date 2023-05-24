import React from 'react'

import Content from '../../components/Content/Content'
import Description from '../../components/Description/Description'
import AtelierDescription from '../../components/Description/AtelierDescription'
import ShowReel from '../../components/ShowReel/ShowReel'

import Tape from '../../assets/img/tape.svg'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
  atelierContainer:{
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
	addBorder: {
		'@media(max-width:800px)': {
			borderBottom: '1px solid var(--secondary-text-color)',
		}
	}
})

function Atelier() {

  const style = useStyle();

return (
	<Content className={style.addBorder}>
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