import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';
import { Link } from 'react-router-dom';

const ProductCard = (props:ProductCardProps) => {
	return (
		<Link to={`/product/${props.id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['head']} style={{backgroundImage: `url('${props.image}')`}}>
					<div className={styles['price']}>
						{props.price} &nbsp;
						<span className={styles['currency']}>₽</span>
					</div>
					<button className={styles['add-to-cart']}>
						<img src='/cart_icon_white.svg' alt="Кнопка добавления товара в карзину" />
					</button>
					<div className={styles['rating']}>
						{props.rating} &nbsp;
						<img src="/star_icon.svg" alt="Иконка звезда рейтинга" />
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