/* eslint-disable no-useless-escape */
export function emailValidator(email) {
	if (email.length > 42)
		return false

	const rx = /^([a-z0-9]([\-\_\.][a-z0-9])?)+\@([a-z0-9]+[\-\_\.]?)*([a-z0-9]{2,})(\.[a-z0-9]{2,4})$/gi
	return rx.test(email)
}