import React, {useState, useRef} from 'react'
import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'
import DialogSuccess from '../../components/Dialog/DialogSuccess'
import { emailValidator } from '../../libs/validators'
import { useTranslation } from 'react-i18next'

import backgroundImg from '../../assets/img/Foto.svg'

const useStyle = createUseStyles({
	formContainer:{
		display: 'flex',
		boxSizing: 'border-box',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 2,
		paddingBottom: '100px'
	},
	headerWrapper:{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header:{
		fontSize: '64px',
		position: 'relative',
		margin: '25px 0',
		textTransform: 'uppercase',
		fontWeight: 700,
		zIndex: 1,
		'&:after':{
			content: "'X'",
			position: 'absolute',
			top: '-10px',
			left: '-10px',
			rotate: '-11deg',
			color: 'var(--secondary-text-color)',
			fontSize: '48px',
			fontWeight: '400',
			zIndex: -1
		},
		'@media(max-width:700px)':{
			fontSize: '46px',
			'&:after':{
				top: '-5px',
				left: '65px',
			}
		}
	},
	form:{
		minWidth: '80vw',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		position: 'relative',
		'@media(max-width:800px)':{
			height: '75%'
		}
	},
	input:{
		fontWeight: 700,
		minWidth: '285px',
		height: '35px',
		width: '70vw',
		border: 'none',
		margin: 0,
		padding: '20px',
		'@media(max-width:800px)':{
			height: '15px'
		}
	},
	requiredWrapper:{
		position: 'relative'
	},
	asterisk:{
		position: 'absolute',
		color: 'var(--secondary-text-color)',
		top: '50%',
		transform: 'translateY(-50%)',
		left: '60px',
	},
	hideAsterisk:{
		display: 'none',
	},


	error:{
		color: 'var(--secondary-text-color)'
	},
	submit:{
		height: '50px',
		padding: '0 20px',
		margin: '40px 0',
		fontSize: '16px',
		backgroundColor: 'var(--secondary-text-color)',
		color: 'var(--main-text-color-light)',
		textTransform: 'uppercase',
		border: 'none',
		transitionDuration: '350ms',
		fontWeight: 700,
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: 'var(--main-bg-color-dark)',
			border: '1px solid var(--main-bg-color-light)',
			color: 'var(--main-text-color-light)',
			transitionDuration: '350ms'
		}
	},

	responsive:{
		overflow: 'hidden',
		'&::before':{
			content: "''",
			position: 'absolute',
			top: '-95px',
			right: '90px',
			width: '100%',
			height: '100%',
			backgroundImage: `url(${backgroundImg})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'top right',
			transform: 'rotate(10deg)',
			backgroundSize: 'contain',
			zIndex: 0,
			'@media(max-width:800px)':{
				right: '0',
				backgroundSize: '50%',
			},
			'@media(max-width:600px)':{
				backgroundSize: '60%',
			}

		},
		'&::after':{
			content: "''",
			position: 'absolute',
			top: '0',
			right: '0',
			width: '100%',
			height: '100%',
			backgroundImage: 'radial-gradient(circle, transparent, var(--main-bg-color-dark) 80%)',
			'@media(min-width:1100px)':{
				backgroundImage: 'radial-gradient(circle, transparent, var(--main-bg-color-dark) 70%)',
			}
		}
	}
})

function Contact({ ads }) {
	const [email, setEmail] = useState('');
    const [error, setError] = useState('');
	const [isTyping, setIsTyping] = useState(false)
	const [successDialog, setSuccessDialog] = useState(false);


	const form = useRef();
	const style = useStyle();
	const { t } = useTranslation();

	const handleSubmit = (event) => {
		event.preventDefault();

		if(email.length === 0){
			setError('Please fill your email');
		}

		else if(email.trim() !== '' && !emailValidator(email)){
			setError('Invalid email address format');
		}

        else{
            setError('');
			setSuccessDialog(true);

			emailjs.sendForm(
				'service_8lcm3qw',
				'template_13uaodo',
				form.current,
				'KJ0DMbdu2V3mz40mc'
			)
			.then((result) =>{
				setEmail('');

				if (ads) {
					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
						'event': 'form_sent'
					});
				}
			}, (error) => {
				alert(error);
			});
        }
	}


	const handleDialogClose = () => {
		setSuccessDialog(false)
	}

  return (
    <Content className={style.responsive}>

        <motion.div 
			id={ads === true ? "AdsContact" : "Contact"}
			className={style.formContainer}
			initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration:1, ease: 'easeInOut'}}
		>
			<div className={style.headerWrapper}>
				<h2 className={style.header}>{t('page.contact.heading')}</h2>
			</div>
			<form ref={form} onSubmit={handleSubmit} noValidate className={style.form}>
				<div className={style.requiredWrapper}>
					<input 
						type="email" 
						name="email" 
						value={email} 
						onChange={(event) => {
							if(event.target.value.length < 42){
								setEmail(event.target.value.trim())
							}

							if(event.target.value.length >= 1){
								setIsTyping(true)
							}
							else{
								setIsTyping(false)
							}
						}}
						className={style.input} placeholder='Email' />
						<span className={`${style.asterisk} ${isTyping ? style.hideAsterisk : ''}`}>*</span>
				</div>
				{error && <p className={style.error}>{error}</p>}   
				<button type="submit" className={style.submit}>{t('page.contact.button')}</button>

			</form>
        </motion.div>
		<Footer ads={ads} />
		<DialogSuccess open={successDialog} onClose={handleDialogClose} />

    </Content>

  )
}

export default Contact