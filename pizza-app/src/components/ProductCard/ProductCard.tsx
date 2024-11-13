import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
const ProductCard = (props:ProductCardProps) => {
	const dispatch = useDispatch<AppDispatch>();
	
	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(cartActions.add(props.id));


	};

	return (
		<Link to={`/product/${props.id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['head']} style={{backgroundImage: `url('${props.image}')`}}>
					<div className={styles['price']}>
						{props.price} &nbsp;
						<span className={styles['currency']}>₽</span>
					</div>
					<button className={styles['add-to-cart']} onClick={add}>
						<img src='/cart_icon_white.svg' alt="Кнопка добавления товара в карзину" />
					</button>
					<div className={styles['rating__wrap']}>
				    	<Rating rating={props.rating} />
					</div>
				</div>
				<div className={styles['footer']}>
					<p className={styles['title']}>{props.title}</p>
					<p className={styles['description']}>{props.description}</p>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;