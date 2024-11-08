// import styles from './Login.module.css';

import Headling from '../../components/Headling/Headling';
import styles from '../Login/Login.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath } from '../../store/store';
import { register, userActions } from '../../store/user.slice';
import { RootState } from '../../store/store';


export type RegisterForm = {
	email: {
		value: string;
	},
	password: {
		value: string;
	}
	name: {
		value: string
	}
}

export function Register() {

	const [valueEmail, setValueEmail] = useState<string>('');
	const [valuePassword, setValuePassword] = useState<string>('');
	const [valueName, setValueName] = useState<string>('');
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();
	const {jwt, registerErrorMessage} = useSelector((s: RootState) => s.user);


	useEffect(() => {
		if(jwt) {
			navigate('/');
		}
	}, [jwt,navigate]);
	
	const submit = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearRegisterError());
		const target = e.target as typeof e.target & RegisterForm;
		const { email, password, name } = target;
	
		dispatch(register({email: email.value, password: password.value, name: name.value}));
	};

	return (
		<div className={styles['login-form__page-wrap']}>
			<div className={styles['login-form__page']}>
				<Headling>Регистрация</Headling>
				{registerErrorMessage && <div className={styles['login-error']}>
					{registerErrorMessage}
				</div>}
				<form className={styles['login-form']} onSubmit={submit}>
					<div className={styles['login-form__row']}>
						<label className={styles['login-form__label']} htmlFor="email-id">Ваш email</label>
						<Input 
							type="email" 
							name="email" 
							className={styles['login-form__input']} 
							id="email-id" 
							placeholder="Ваш email"
							value={valueEmail}
							onChange={(e) => setValueEmail(e.target.value)}
						/>
					</div>
					<div className={styles['login-form__row']}>
						<label className={styles['login-form__label']} htmlFor="password-id">Ваш пароль</label>
						<Input 
							type="password" 
							name="password" 
							className={styles['login-form__input']} 
							id="password-id" 
							placeholder="Ваш пароль"
							value={valuePassword}
							onChange={(e) => setValuePassword(String(e.target.value))}
						/>
					</div>
					<div className={styles['login-form__row']}>
						<label className={styles['login-form__label']} htmlFor="name-reg">Ваш Имя</label>
						<Input 
							type="t" 
							name="name" 
							className={styles['login-form__input']} 
							id="name-reg" 
							placeholder="Ваш имя"
							value={valueName}
							onChange={(e) => setValueName(e.target.value)}
						/>
					</div>
					<Button className={styles['login-form__btn']} appearence='big'>Зарегистрироваться</Button>
				</form>
				<div className={styles['login-form__register-wrap']}>
					<p className={styles['login-form__register-text']}>Есть аккаунт?</p>
					<Link to="/auth/login" className={styles['login-form__register-link']}>Войти</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;