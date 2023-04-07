import React from 'react'

import Content from '../../components/Content/Content'
import InstaClip from '../../components/InstaClip/InstaClip';
import Description from '../../components/Description/Description';

import AboutDescription from '../../components/Description/AboutDescription';

import { createUseStyles } from 'react-jss'
import Tape from '../../assets/img/tape.svg'

const useStyle = createUseStyles({
  aboutContainer:{
    width: '100%',
    height: '100%',
    position: 'relative',
      '&>div:nth-child(1)': {
        order: '2',
    },
    '&>div:nth-child(2)': {
        backgroundColor: 'black',
        '&:before':{
        content: '""',
        position: 'absolute',
        right: '5px',
        width: '8px',
        height: '117%',
        backgroundImage: `url(${Tape})`,
        transform: 'scale(0.85)',
        zIndex: '2',
        '@media (max-width:800px)':{
                display: 'none'
            }
        }
    }
  }
  
});

function About() {

    const style = useStyle()

    return (
        <Content>
            <div id="About" className={style.aboutContainer}>
            <Description>
                <AboutDescription />
            </Description>
            <Description>
                <InstaClip />
            </Description>
            </div>
        </Content>
    )
}

export default About