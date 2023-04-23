import React from 'react'
import Content from '../Content/Content'
import { createUseStyles } from 'react-jss'
import Work from './Work/Work'

const useStyle = createUseStyles({
    workContainer:{
		width: '100%',
		height: '100%',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	header:{
		fontSize: '64px',
		textAlign: 'center',
		position: 'relative',
		margin: '10px 0 25px 0',
		textTransform: 'uppercase',
		'&:after':{
			content: "'X'",
			position: 'absolute',
			top: '0px',
			left: '-10px',
			rotate: '-15deg',
			color: 'var(--secondary-text-color)',
			fontSize: '48px',
			fontWeight: '400'
		},
		'@media(max-width:700px)':{
			fontSize: '52px',
			'&:after':{
				top: '5px',
				left: '70px',
			}
		}
	},
})

function WorkSteps() {

    const style = useStyle()

    return (
        <Content>
            <div id="Services" className={style.workContainer}>
                <h2 className={style.header}>How it works?</h2>
                <Work />
            </div>

        </Content>
    )
}

export default WorkSteps