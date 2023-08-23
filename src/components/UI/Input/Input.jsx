import { TextField } from '@material-ui/core'
import styles from './Input.module.css'

function isInvalid({ valid, touched, shouldValidate }) {
	return !valid && shouldValidate && touched
}

export const Input = ({
	type,
	label,
	value,
	onChange,
	errorMessage,
	valid,
	touched,
	shouldValidate,
}) => {
	// console.log(valid, touched, shouldValidate);
	const inputType = type || 'text'
	const classes = [styles.Input]
	const htmlfor = `${inputType}-${Math.random()}`

	return (
		<TextField
			error={isInvalid({ valid, touched, shouldValidate })}
			id='outlined-error-helper-text'
			label={label}
			value={value}
			helperText={
				isInvalid({ valid, touched, shouldValidate }) ? errorMessage : ''
			}
			variant='outlined'
			type={type}
			onChange={onChange}
		/>
	)
}
