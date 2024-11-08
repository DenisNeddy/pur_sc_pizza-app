import {  NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { getProfile, userActions } from '../../store/user.slice';
import { useEffect } from 'react';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';


const Layout = () => {
	const navigate = useNavigate();
	const dispath = useDispatch<AppDispath>();
	const profile = useSelector((s: RootState) => s.user.profile);

	useEffect(() => {
		dispath(getProfile());
	}, [dispath]);

	const logout = () => {
		dispath(userActions.logout());
		navigate('/auth/login');

	};

	return (
		<div className={styles['layout']}>

			<div className={styles['menu']}>
			
				<div className={styles['menu__user-data']}>
					<div className={styles['menu__user-avatar']}>
						<img className={styles['menu__user-avatar-img']} src={'user_icon.png'} alt='аватар пользователя' />
					</div>
					<p className={styles['menu__user-name']}>{profile?.name}</p>
					<p className={styles['menu__user-email']}>{profile?.email}</p>
				</div>
				<div className={styles['menu__nav']}>
					<NavLink to='/' className={({isActive}) => cn(styles['menu__nav-link'], {
						[styles.active]: isActive
					})}> <img src={'menu_icon.svg'} alt="иконка меню" />Меню</NavLink>
					<NavLink to='/cart' className={({isActive}) => cn(styles['menu__nav-link'], {
						[styles.active]: isActive
					})}><img src={'cart_icon.svg'} alt="иконка меню" />Корзина<span className={styles['menu__cart-counter']}>2</span></NavLink>
				</div>
				
				<Button 
					className={styles['menu__btn-exit']} 
					onClick={logout}
				>
					<img src={'button_menu_icon.svg'} alt="иконка выхода на кнопке" />
					Выйти
				</Button>
			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;