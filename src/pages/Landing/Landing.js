import React from 'react';

import Video from '../Video/Video';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Atelier from '../Atelier/Atelier';
import Contact from '../Contact/Contact';

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    mainContent:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--main-bg-color-dark)',
        color: 'var(--main-text-color-light)'
    }
  });

function Landing() {

    const style = useStyles()

    return (
        <div className={style.mainContent}>
            <Video />
            <Services />
            <Atelier />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Landing