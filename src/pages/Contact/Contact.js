import React, {useState} from 'react'
import { createUseStyles } from 'react-jss'

import Content from '../../components/Content/Content'
import DialogSuccess from '../../components/Dialog/DialogSuccess'

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

	const style = useStyle()

	const [email, setEmail] = useState('');
	const [successDialog, setSuccessDialog] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSuccessDialog(true)
	}

	const handleDialogClose = () => {
		setSuccessDialog(false)
	}

  return (
    <Content>
        <div id="Contact">

          <h2 className={style.header}>Contact</h2>

		  <form onSubmit={handleSubmit} className={style.form}>
			<input type="email" name="email" value={email} onChange={(event) => {setEmail(event.target.value)}} className={style.mailInput} placeholder='Email*'  />
			<button type="submit" className={style.submit}>Send</button>
		  </form>
        </div>
		<DialogSuccess open={successDialog} onClose={handleDialogClose} />
    </Content>

  )
}

export default Contact