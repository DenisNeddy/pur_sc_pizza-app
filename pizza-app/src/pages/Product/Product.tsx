import { useLoaderData } from 'react-router-dom';
import { ProductData } from '../../interfaces/product.interface';
const Product = () => {

	const data = useLoaderData() as ProductData;
	
	return (
		<div>
            Продукт под номером {data.name}
		</div>
	);
};

export default Product;