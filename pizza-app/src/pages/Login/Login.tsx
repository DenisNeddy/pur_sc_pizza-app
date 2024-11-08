// import styles from './Login.module.css';

import Headling from '../../components/Headling/Headling';
import styles from './Login.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath } from '../../store/store';
import { login, userActions } from '../../store/user.slice';
import { RootState } from '../../store/store';

export type LoginForm = {
	email: {
		value: string;
	},
	password: {
		value: string;
	}
}

const Login = () => {

	const [valueEmail, setValueEmail] = useState<string>('');
	const [valuePassword, setValuePassword] = useState<string>('');
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();
	const {jwt, loginErrorMessage} = useSelector((s: RootState) => s.user);


	useEffect(() => {
		if(jwt) {
			navigate('/');
		}
	}, [jwt,navigate]);
	
	const submit = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearLoginError());
		const target = e.target as typeof e.target& LoginForm;
		const { email, password } = target;
		await sendLogin(email.value, password.value);
	};

	const sendLogin = async (email: string, password: string) => {
		dispatch(login({email, password}));

	};

	return (
		<div className={styles['login-form__page-wrap']}>
			<div className={styles['login-form__page']}>
				<Headling>Вход</Headling>
				{loginErrorMessage && <div className={styles['login-error']}>
					{loginErrorMessage}
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