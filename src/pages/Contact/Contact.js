import React, {useState, useRef} from 'react'
// import { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import emailjs from '@emailjs/browser'

import Content from '../../components/Content/Content'
import DialogSuccess from '../../components/Dialog/DialogSuccess'
import { emailValidator } from '../../libs/validators'

const useStyle = createUseStyles({
	header:{
		fontSize: '64px',
		textAlign: 'center'
	},
	form:{
		minWidth: '80vw',
		minHeight: '40vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '35px'
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
		fontWeight: 'bold',
		border: 'none',
		transitionDuration: '350ms',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: 'var(--main-bg-color-dark)',
			border: '1px solid var(--main-bg-color-light)',
			color: 'var(--main-text-color-light)',
			transitionDuration: '350ms'
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
    <Content>

        <div id="Contact">
			<h2 className={style.header}>Contact</h2>
			<form ref={form} onSubmit={handleSubmit} noValidate className={style.form}>

				<div className={style}>
					<input type="email" name="email" value={email} onChange={(event) => {setEmail(event.target.value.trim())}} className={style.mailInput} placeholder='Email*' required />
					{error && <p className={style.error}>{error}</p>}   
				</div>

				<button type="submit" className={style.submit}>Send</button>
		  </form>
        </div>

		<DialogSuccess open={successDialog} onClose={handleDialogClose} />

    </Content>

  )
}

export default Contact