import React from 'react'

import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next'

import icoPreProd from '../../assets/img/icoPreProd.svg'
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
            minWidth: '225px',
        },
        '@media(max-width:600px)':{
            flex: '0 0 calc(60% - 20px)',
        }
    },
    image:{
        width: '150px',
        height: '150px',
        position: 'relative',
        '&:nth-child(3)':{
            width: '2000px'
        }
    },
    title:{
        color: 'var(--secondary-text-color)',
        margin: 0,
    }
})

function ServiceInformation() {

    const style = useStyle();
    const { t } = useTranslation();

    const items = [
        {id: 1, icon: icoPreProd, title: t('page.services.list.title_pre_prod'), description: t('page.services.list.description_pre_prod')},
        {id: 2, icon: icoProd, title: t('page.services.list.title_prod'), description: t('page.services.list.description_prod'), pricing: t('page.services.list.pricing_prod')},
        {id: 3, icon: icoPostProd, title: t('page.services.list.title_post_prod'), description: t('page.services.list.description_post_prod')}
    ]

    const services = items.map((props) => 
        <div key={props.id} className={style.card}>
            <div>
                <img src={props.icon} alt={props.title} className={style.image} />
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <p>{props.description}</p>
            <p dangerouslySetInnerHTML={{ __html: props.pricing }}></p>
        </div>
    )

    return (
        <div className={style.content}>
            {services}
        </div>
    )
}

export default ServiceInformation