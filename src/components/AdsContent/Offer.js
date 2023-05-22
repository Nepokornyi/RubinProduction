import React from 'react'
import Content from '../Content/Content'

import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next'
import icoIndoor from '../../assets/img/icoIndoor.svg'

const useStyle = createUseStyles({
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
			right: '-10px',
			rotate: '-15deg',
			color: 'var(--secondary-text-color)',
			fontSize: '48px',
			fontWeight: '400',
            zIndex: -1,
            '@media(max-width:500px)':{
				top: '15px',
				right: '105px'
			}
		},
		'@media(max-width:700px)':{
			fontSize: '51.9px'
		}
	},

    content: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        paddingBottom: '15px',
        minHeight: '320px',
        height: '80%',
        '@media(max-width: 800px)':{
			height: '90%',
		}
    },
    card: {
        height: '265px',
        maxWidth: '450px',
        flex: '0 0 calc(50% - 20px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        '@media(max-width:800px)':{
            flex: '0 0 calc(60% - 20px)',
            minWidth: '265px',
            gap: 0,
        },
        '& p': {
            marginBottom: 0,
        }
    },
    image: {
        width: '150px',
        height: '150px',
        position: 'relative'
    },
    title: {
        color: 'var(--secondary-text-color)',
        margin: 0,
    }, 

    shortContent:{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '500px',
        height: '60vh',
        '@media(max-width:800px)':{
            height: '100vh'
        }
    }

})

function Offer() {

    const style = useStyle();
    const { t } = useTranslation();

    const list = [
        {id: 1, ico: icoIndoor, title: t('ads.voucher.email_title'), description: t('ads.voucher.email_description')},
        {id: 2, ico: icoIndoor, title: t('ads.voucher.discount'), description: t('ads.voucher.discount_description')}
    ]

    const content = list.map((props) => {
        return(
            <div key={props.id} className={style.card}>
                <img src={props.ico} alt='Starter Pack icon' className={style.image} />
                <div className={style.description}>
                    <h3 className={style.title}>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        )
    })

    return (
        <Content className={style.shortContent}>
            <div className={style.headerWrapper}>
                <h2 className={style.header}>{t('ads.voucher.heading')}</h2>
            </div>
            <div className={style.content}>
                {content}
            </div>


        </Content>
    )
}

export default Offer