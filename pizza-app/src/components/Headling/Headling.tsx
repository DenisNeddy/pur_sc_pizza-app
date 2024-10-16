import styles from './Headling.module.css';
import { HeadlingProps } from './Headling.props';
import cn from 'classnames';

const Headling = ({ children, className, ...props }: HeadlingProps) => {
	return (
		<h1 {...props} className={cn(className,styles['headling'])}>
			{children}
		</h1>
	);
};

export default Headling;