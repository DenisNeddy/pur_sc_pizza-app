import { useParams } from 'react-router-dom';

const Product = () => {
	const { id } = useParams();
	return (

		<div>
            Продукт под номером {id}
		</div>
	);
};

export default Product;