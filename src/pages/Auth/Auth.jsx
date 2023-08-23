import is from 'is_js'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '../../components/UI/Button/Button'
import { Input } from '../../components/UI/Input/Input'
import { auth } from '../../services/authService'
import styles from './Auth.module.css'

export const Auth = () => {
	const [isFromValid, setIsFormValid] = useState(false)
	const initialformControls = {
		email: {
			value: '',
			type: 'email',
			label: 'Email',
			errorMessage: 'Введите корректный email',
			valid: false,
			touched: false,
			validation: {
				required: true,
				email: true,
			},
		},
		password: {
			value: '',
			type: 'password',
			label: 'Пароль',
			errorMessage: 'Введите корректный пароль',
			valid: false,
			touched: false,
			validation: {
				required: true,
				minLength: 6,
			},
		},
	}
	const [formControls, setFormControls] = useState(initialformControls)
	const dispatch = useDispatch()

	const loginHandler = () => {
		dispatch(auth(formControls.email.value, formControls.password.value, true))
	}
	const registerHandler = () => {
		dispatch(auth(formControls.email.value, formControls.password.value, false))
	}
	const submitHandler = event => {
		event.preventDefault()
	}
	const validateControl = (value, validation) => {
		if (!validation) {
			return true
		}

		let isValid = true

		if (validation.required) {
			isValid = value.trim() !== '' && isValid
		}
		if (validation.email) {
			isValid = is.email(value) && isValid
		}
		if (validation.minLength) {
			isValid = value.length >= validation.minLength && isValid
		}
		return isValid
	}

	const onChangeHandler = (event, controlName) => {
		const newFormControls = { ...formControls }
		const control = { ...newFormControls[controlName] }

		control.value = event.target.value
		control.touched = true
		control.valid = validateControl(control.value, control.validation)
		newFormControls[controlName] = control

		let newIsFromValid = true
		Object.keys(newFormControls).forEach(name => {
			newIsFromValid = newFormControls[name].valid && newIsFromValid
		})
		setFormControls(newFormControls)
		setIsFormValid(newIsFromValid)
	}

	const renderInputs = () => {
		return Object.keys(formControls).map((controlName, index) => {
			const control = formControls[controlName]
			return (
				<Input
					key={controlName + index}
					type={control.type}
					value={control.value}
					valid={control.valid}
					touched={control.touched}
					label={control.label}
					shouldValidate={!!control.validation}
					errorMessage={control.errorMessage}
					onChange={event => onChangeHandler(event, controlName)}
				/>
			)
		})
	}

	return (
		<div className={styles.Auth}>
			<div>
				<h1>Авторизация</h1>
				<form onSubmit={submitHandler} className={styles.AuthForm}>
					{renderInputs()}
					<div className={styles.buttons}>
						<Link to={'/restaurants'}>
							<Button
								type='primary'
								onClick={loginHandler}
								disabled={!isFromValid}
							>
								Войти
							</Button>
						</Link>
						<Button onClick={registerHandler} disabled={!isFromValid}>
							Зарегистрироваться
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
