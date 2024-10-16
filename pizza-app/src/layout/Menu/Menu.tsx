import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<div>
			<div>
				<Link to='/'>Меню</Link>
				<Link to='/cart'>Корзина</Link>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;