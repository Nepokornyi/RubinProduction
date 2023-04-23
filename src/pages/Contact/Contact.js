import React, {useState, useRef} from 'react'
import { createUseStyles } from 'react-jss'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'
import DialogSuccess from '../../components/Dialog/DialogSuccess'
import { emailValidator } from '../../libs/validators'

import backgroundImg from '../../assets/img/Foto.svg'

const useStyle = createUseStyles({
	formContainer:{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		zIndex: 2,
	},
	header:{
		fontSize: '64px',
		textAlign: 'center',
		position: 'relative',
		textTransform: 'uppercase',
		'&:after':{
			content: "'X'",
			position: 'absolute',
			top: '0px',
			left: '80px',
			rotate: '-11deg',
			color: 'var(--secondary-text-color)',
			fontSize: '48px',
			fontWeight: '400'
		},
		'@media(max-width:700px)':{
			fontSize: '52px',
			'&:after':{
				top: '-5px',
				left: '65px',
			}
		}
	},
	form:{
		minWidth: '80vw',
		minHeight: '20vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '35px',
		position: 'relative'
	},
	mailInput:{
		minWidth: '300px',
		height: '40px',
		width: '60vw'
	},
	error:{
		color: 'var(--secondary-text-color)'
	},
	submit:{
		width: '200px',
		height: '50px',
		fontSize: '16px',
		backgroundColor: 'var(--main-bg-color-light)',
		color: 'var(--main-text-color-dark)',
		textTransform: 'uppercase',
		border: 'none',
		transitionDuration: '350ms',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: 'var(--main-bg-color-dark)',
			border: '1px solid var(--main-bg-color-light)',
			color: 'var(--main-text-color-light)',
			transitionDuration: '350ms'
		}
	},

	responsive:{
		minHeight: '600px',
		overflow: 'hidden',
		'&::before':{
			content: "''",
			position: 'absolute',
			top: '0',
			right: '0',
			width: '100%',
			height: '100%',
			backgroundImage: `url(${backgroundImg})`,
			backgroundSize: '35%',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'top right',
			transform: 'rotate(10deg)',
			zIndex: 0,
			'@media(max-width:800px)':{
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

function Contact() {
	const [email, setEmail] = useState('');
    const [error, setError] = useState('');
	const [successDialog, setSuccessDialog] = useState(false);

	const form = useRef();
	const style = useStyle()

	const handleSubmit = (event) => {
		event.preventDefault();


		if(email.length === 0){
			setError('Please fill your email')
		}

		else if(email.trim() !== '' && !emailValidator(email)){
			setError('Invalid email address format');
		}

        else{
            setError('');
			setSuccessDialog(true);

			emailjs.sendForm(
				'service_oel6o25',
				'template_13uaodo',
				form.current,
				'KJ0DMbdu2V3mz40mc'
			)
			.then((result) =>{
				setEmail('');
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
			id="Contact"
			className={style.formContainer}
			initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration:1, ease: 'easeInOut'}}>
			<h2 className={style.header}>Contact</h2>
			<form ref={form} onSubmit={handleSubmit} noValidate className={style.form}>

				<div className={style}>
					<input type="email" name="email" value={email} onChange={(event) => {setEmail(event.target.value.trim())}} className={style.mailInput} placeholder='Email*' required />
					{error && <p className={style.error}>{error}</p>}   
				</div>

				<button type="submit" className={style.submit}>Send</button>
		  </form>
        </motion.div>
		<Footer />
		<DialogSuccess open={successDialog} onClose={handleDialogClose} />

    </Content>

  )
}

export default Contact