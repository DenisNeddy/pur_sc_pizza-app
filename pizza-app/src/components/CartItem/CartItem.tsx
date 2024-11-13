import styles from './CartItem.module.css';
import { CartItemProps } from './CartItem.props';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
const CartItem = (props:CartItemProps) => {
	const dispatch = useDispatch<AppDispatch>();
	
	const increase = () => {	
		dispatch(cartActions.add(props.id));
	};

	const decrease = () => {
	};

	const remove = () => {
	};

	return (
		
		<div className={styles['item']}>
			<div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['price']}>{props.price} &nbsp;₽</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['button']} onClick={decrease}>
					<img src='/cart_icon_minus.svg' alt="Уменьшить количество товара" />
				</button>
				<div>{props.count}</div>
				<button className={styles['button']} onClick={increase}>
					<img src='/cart_icon_plus.svg' alt="Увеличить количество товара" />
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img src='/cart_close_icon.svg' alt="Удалить товар" />
				</button>
			</div>	
		</div>
	);
};

export default CartItem;