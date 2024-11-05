// import styles from './Register.module.css';
import Headling from '../../components/Headling/Headling';
import styles from './Register.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';


const Register = () => {


	return (
		<div className={styles['register-form__page-wrap']}>

			<div className={styles['register-form__page']}>
				<Headling>Регистрация</Headling>
				<form className={styles['register-form']}>
					<div className={styles['register-form__row']}>
						<label className={styles['register-form__label']} htmlFor="email-reg-id">Ваш email</label>
						<Input type="email" name="email-reg" className={styles['register-form__input']} id="email-reg-id" placeholder="Email"/>
					</div>
					<div className={styles['register-form__row']}>
						<label className={styles['register-form__label']} htmlFor="password-reg-id">Ваш пароль</label>
						<Input type="text" name="password-reg" className={styles['register-form__input']} id="password-reg-id" placeholder="Пароль"/>
					</div>
					<div className={styles['register-form__row']}>
						<label className={styles['register-form__label']} htmlFor="name-reg-id">Ваше имя</label>
						<Input type="text" name="name-reg" className={styles['register-form__input']} id="name-reg-id" placeholder="Имя"/>
					</div>
					<Button className={styles['register-form__btn']} appearence='big'>Зарегистрироваться</Button>
				</form>
				<div className={styles['register-form__register-wrap']}>
					<p className={styles['register-form__register-text']}>Есть аккаунт?</p>
					<Link to="/auth/login" className={styles['register-form__register-link']}>Войти</Link>
				</div>
			</div>
		</div>
	);
};




export default Register;