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
		height: 'calc(100% - 100px)',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 2,
	},
	header:{
		fontSize: '64px',
		height: '20%',
		textAlign: 'center',
		position: 'relative',
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
			fontSize: '52px',
			'&:after':{
				top: '-5px',
				left: '65px',
			}
		}
	},
	form:{
		minWidth: '80vw',
		minHeight: '80%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '35px',
		position: 'relative'
	},
	inputRow:{
		display: 'flex',
		gap: '20px'
	},
	inputColumn:{
		display: 'flex',
		flexDirection: 'column',
		gap: '20px'
	},
	input:{
		minWidth: '350px',
		height: '35px',
		width: '35vw',
		border: 0,
		margin: 0,
		padding: '20px',
	},
	textarea:{
		height: '225px',
		width: '35vw',
		padding: '20px',
		border: 0,
		margin: 0,
	},


	error:{
		color: 'var(--secondary-text-color)'
	},
	submit:{
		width: '200px',
		height: '50px',
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

function Contact({ ads }) {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
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
			id={ads === true ? "AdsContact" : "Contact"}
			className={style.formContainer}
			initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration:1, ease: 'easeInOut'}}>
			<h2 className={style.header}>Contact</h2>
			<form ref={form} onSubmit={handleSubmit} noValidate className={style.form}>

				<div className={style.inputRow}>
					<div className={style.inputColumn}>
						<input type="text" name="name" value={name} className={style.input} placeholder='Name' />
						<input type="email" name="email" value={email} onChange={(event) => {setEmail(event.target.value.trim())}} className={style.input} placeholder='Email*' required />
						<input type="number" name="phone" value={phone} className={style.input} placeholder='Phone number' />
					</div>
					<div>
						<textarea className={style.textarea} name="message" cols="30" rows="10" placeholder='Message'></textarea>
					</div>
					
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