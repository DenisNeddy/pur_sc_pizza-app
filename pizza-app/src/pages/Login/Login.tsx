// import styles from './Login.module.css';

import Headling from '../../components/Headling/Headling';
import styles from './Login.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../../helpers/API';
import { useState } from 'react';
import { LoginResponse } from '../../interfaces/auth.interface';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { userActions } from '../../store/user.slice';

export type LoginForm = {
	email: {
		value: string;
	},
	password: {
		value: string;
	}
}

const Login = () => {
	const [error, setError] = useState<string | null>();
	const [valueEmail, setValueEmail] = useState<string>('');
	const [valuePassword, setValuePassword] = useState<string>('');
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();
	
	const submit = async (e: FormEvent) => {
		e.preventDefault();
		setError(null);	
		const target = e.target as typeof e.target& LoginForm;
		const { email, password } = target;
		await sendLogin(email.value, password.value);
	};

	const sendLogin = async (email: string, password: string) => {
		try {

			const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
				email,
				password
			});
			localStorage.setItem('jwt', data.access_token);
			dispatch(userActions.addJwt(data.access_token));
			setValueEmail('');
			setValuePassword('');
			navigate('/');
		} catch(e) {
			if(e instanceof AxiosError) {
				setError(e.response?.data.message);
			}
		}
		

	};

	return (
		<div className={styles['login-form__page-wrap']}>
			<div className={styles['login-form__page']}>
				<Headling>Вход</Headling>
				{error && <div className={styles['login-error']}>
					{error}
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
							onChange={(e) => setValuePassword(e.target.value)}
						/>
					</div>
					<Button className={styles['login-form__btn']} appearence='big'>Вход</Button>
				</form>
				<div className={styles['login-form__register-wrap']}>
					<p className={styles['login-form__register-text']}>Нет аккаунта?</p>
					<Link to="/auth/register" className={styles['login-form__register-link']}>Зарегистрироваться</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;