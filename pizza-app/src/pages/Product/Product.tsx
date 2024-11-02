import { Await, useLoaderData, Link } from 'react-router-dom';
import { ProductData } from '../../interfaces/product.interface';
import { Suspense } from 'react';
import styles from './Product.module.css';
import Button from '../../components/Button/Button';
import Rating from '../../components/Rating/Rating';


interface stylesProps {
	backgroundImage: string,
	backgroundRepeat: string,
	backgroundSize: string,
	backgroundPosition: string,

	width: string,
	height: string
}

const Product = () => {
	const data = useLoaderData() as {data: ProductData};
	

	function getStyles (image: string): stylesProps {
		return {
			backgroundImage: `url('${image}')`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'auto 100%',
			backgroundPosition: 'center left',	
			width: '324px',
			height: '248px'
		};
	}
	
	return (
		<>
			<Suspense fallback={<>Загружаю....</>}>

				<Await
					resolve={data.data}
				>
					{
						({data}: {data: ProductData}) => (
							<div className={styles['product']}>
								<div className={styles['product__header']}>
									<Link to='/' className={styles['product__btn-back']}>
										<img src='/arrow_back_icon.svg'/>
									</Link>
									<h2 className={styles['product__title']}>{ data.name }</h2>
									<Button className={styles['product__cart-btn']}><img src='/cart_icon_white.svg' /> В корзину</Button>
								</div>
								<div className={styles['product__wrap']}>
									<div className={styles['product__image']} style={getStyles(data.image)}>	
									</div>
									<div className={styles['product__content']}>
										<div className={styles['product__price']}>Цена <span className={styles['product__price-total']}>{data.price} </span><span className={styles['product__price-currency']}>₽</span></div>
										<div className={styles['product__rating']}>
											Рейтинг 
											<Rating rating={data.rating} />
										</div>
										<div className={styles['product__composition']}>
											<p className={styles['product__composition-title']}>Состав</p>
											<ul className={styles['product__composition-list']}>

												{
													data.ingredients.map(el => (
														<li key={el} className={styles['product__composition-item']}>
															{el}
														</li>
													))
												}
												
											</ul>
										</div>
									</div>
								</div>
								
							</div>
						)
					}
				</Await>
			</Suspense>
           
		</>
	);
};

export default Product;