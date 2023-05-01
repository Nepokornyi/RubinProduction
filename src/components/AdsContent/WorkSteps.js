import React from 'react'
import Content from '../Content/Content'
import { createUseStyles } from 'react-jss'
import { useMediaQuery } from 'react-responsive'
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
	headerWrapper:{
        width: '100%',
		height: '30%',
		minHeight: '80px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottom: '1px solid var(--secondary-text-color)',
	},
	header:{
		fontSize: '64px',
		textAlign: 'center',
		position: 'relative',
		margin: '10px 0 25px 0',
		textTransform: 'uppercase',
		fontWeight: 700,
		wordWrap: 'break-word',
		zIndex: 1,
		'&:after':{
			content: "'X'",
			position: 'absolute',
			top: '0px',
			left: '-15px',
			rotate: '-15deg',
			color: 'var(--secondary-text-color)',
			fontSize: '48px',
			fontWeight: '400',
			zIndex: -1,
			'@media(max-width:600px)':{
				top: '50px',
				left: '30px'
			}
		},
		'@media(max-width:800px)':{
			fontSize: '52px',
		}
	},
	adaptiveContent:{
		minHeight: '750px'
	}
})

function WorkSteps() {

    const style = useStyle()

	const isMobile = useMediaQuery({query: '(max-width:600px)'});

    return (
        <Content className={style.adaptiveContent}>
            <div id="Services" className={style.workContainer}>
				<div className={style.headerWrapper}>
                	<h2 className={style.header}>How {isMobile && <br/>} it works?</h2>
				</div>
                <Work />
            </div>

        </Content>
    )
}

export default WorkSteps