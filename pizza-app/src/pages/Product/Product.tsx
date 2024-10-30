import { Await, useLoaderData } from 'react-router-dom';
import { ProductData } from '../../interfaces/product.interface';
import { Suspense } from 'react';

const Product = () => {
	const data = useLoaderData() as {data: ProductData};
	
	return (
		<>
			<Suspense fallback={<>Загружаю....</>}>

				<Await
					resolve={data.data}
				>
					{
						({data}: {data: ProductData}) => (
							<> Продукт под номером {data.name}</>
						)
					}
				</Await>
			</Suspense>
           
		</>
	);
};

export default Product;