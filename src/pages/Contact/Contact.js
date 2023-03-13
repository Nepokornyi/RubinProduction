import React, {useState} from 'react'
import { createUseStyles } from 'react-jss'

import Content from '../../components/Content/Content'

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
		height: '50px'
	}
})

function Contact() {

	const style = useStyle()

	const [email, setEmail] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
	}
	const handleChange = (event) => {
		setEmail(event.target.value)
	}

  return (
    <Content>
        <div id="Contact">

          <h2 className={style.header}>Contact</h2>

		  <form onSubmit={handleSubmit} className={style.form}>
			<input type="email" name="email" value={email} onChange={handleChange} className={style.mailInput} placeholder='Email*'  />
			<button type="submit" className={style.submit}>Send</button>
		  </form>

        </div>
    </Content>

  )
}

export default Contact