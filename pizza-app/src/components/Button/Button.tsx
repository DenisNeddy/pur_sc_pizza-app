import { ButtonProps } from '../Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

const Button = ({ children, appearence = 'small', className, ...props}: ButtonProps) => {
	return (
		<button className={cn(styles['button'], styles['accent'], {
			[styles['small']] : appearence === 'small',
			[styles['big']] : appearence === 'big'
		},  className)} {...props}>{ children }</button>
	);
};

export default Button;