import React from 'react';

import Video from '../Video/Video';
import Contact from '../Contact/Contact';
import Offer from '../../components/AdsContent/Offer';

import { createUseStyles } from 'react-jss'
import WorkSteps from '../../components/AdsContent/WorkSteps';

const useStyles = createUseStyles({
    mainContent:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--main-bg-color-dark)',
        color: 'var(--main-text-color-light)'
    }
  });

function AdsLanding() {

    const style = useStyles()

    return (
        <div className={style.mainContent}>
            <Video ads={true} />
            <Offer />
            <WorkSteps />
            <Contact ads={true} />
        </div>
    )
}

export default AdsLanding