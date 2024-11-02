import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';

const Rating = ({rating}: RatingProps) => {
	return (
		<div className={styles['rating']}>
			{rating} &nbsp;
			<img src="/star_icon.svg" alt="Иконка звезда рейтинга" />
		</div>
	);
};

export default Rating;