import {  NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';


const Layout = () => {
	return (
		<div className={styles['layout']}>

			<div className={styles['menu']}>
			
				<div className={styles['menu__user-data']}>
					<div className={styles['menu__user-avatar']}>
						<img className={styles['menu__user-avatar-img']} src={'user_icon.png'} alt='аватар пользователя' />
					</div>
					<p className={styles['menu__user-name']}>Антон Ларичев</p>
					<p className={styles['menu__user-email']}>alaricode@ya.ru</p>
				</div>
				<div className={styles['menu__nav']}>
					<NavLink to='/' className={({isActive}) => cn(styles['menu__nav-link'], {
						[styles.active]: isActive
					})}> <img src={'menu_icon.svg'} alt="иконка меню" />Меню</NavLink>
					<NavLink to='/cart' className={({isActive}) => cn(styles['menu__nav-link'], {
						[styles.active]: isActive
					})}><img src={'cart_icon.svg'} alt="иконка меню" />Корзина<span className={styles['menu__cart-counter']}>2</span></NavLink>
				</div>
				
				<Button className={styles['menu__btn-exit']} ><img src={'button_menu_icon.svg'} alt="иконка выхода на кнопке" />Выйти</Button>
			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;