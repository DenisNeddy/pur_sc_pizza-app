import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import ProductCard from '../../components/ProductCard/ProductCard';

const Menu = () => {
	return (
		<>
			<div className={styles['head']}>
				<Headling>Меню</Headling>
				<Search placeholder='Введите блюдо или состав'/>
			</div>
			<div>
				<ProductCard 

					id={1}
					title='Наслаждение'
					description='Салями, руккола, помидоры, оливки'
					rating={4.5}
					price={300}
					image='/cart_img_1.jpg'
				
				/>
			</div>
		</>
	
	);
};

export default Menu;