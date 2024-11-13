import { useSelector } from 'react-redux';
import Headling from '../../components/Headling/Headling';
import { RootState } from '../../store/store';
import { ProductData } from '../../interfaces/product.interface';
import { useEffect, useState } from 'react';
import CartItem from '../../components/CartItem/CartItem';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';

const Cart = () => {
	const [cartProducts, setCardProducts] = useState<ProductData[]>([]);
	const items = useSelector((s: RootState) => s.cart.items);

	const getItem = async (id: number) => {
		const {data} = await axios.get<ProductData>(`${PREFIX}/products/${id}`);
		return data;
	};

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(item => getItem(item.id)));
		setCardProducts(res);

	};

	useEffect(() => {
		loadAllItems();
	}, [items]);
	return (	
		<div>
			<Headling>Корзина</Headling>
			{
				items.map(item => {
					const product = cartProducts.find(p => p.id === item.id);
					if(!product) {
						return;
					}

					return <CartItem key={item.id} count={item.count} {...product} />;

				}
				)
			}
		</div>
	);
};

export default Cart;