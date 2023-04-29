/* eslint-disable no-useless-escape */
export function emailValidator(email) {
	if (email.length > 42)
		return false

	const rx = /^([a-z0-9]([\-\_\.][a-z0-9])?)+\@([a-z0-9]+[\-\_\.]?)*([a-z0-9]{2,})(\.[a-z0-9]{2,4})$/gi
	return rx.test(email)
}

export function nameValidator(name) {
	return name.trim().length > 0 && name.trim().length <= 50
}

export function phoneValidator(phone) {
	const rx = /^\+?[1-9]\d{1,14}$/;
	return rx.test(phone)
}