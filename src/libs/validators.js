/* eslint-disable no-useless-escape */
export function emailValidator(email) {
	const rx = /^([a-z0-9]([\-\_\.][a-z0-9])?)+\@([a-z0-9]+[\-\_\.]?)*([a-z0-9]{2,})(\.[a-z0-9]{2,4})$/gi
	return rx.test(email)
}

// other validators

// const regexLetters = /^[a-zA-Z\s]*$/;
// const regexPhone = /^(\+\d{0,2}\s?)?((\(\d{0,4}\)|\d{0,4})\s?)(\d{0,4}([\s-]?\d{0,4}){0,3})$/;