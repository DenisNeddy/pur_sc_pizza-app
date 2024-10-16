import { forwardRef } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({className,isValid = true, ...props}, ref) {
	return (
		<div className={styles['search__wrapper']}>
		    <img className={styles['search__icon']} src={'search_icon.svg'} alt="иконка поиска" />
			<input {...props} ref={ref} className={cn(styles['input'], className,  {
				[styles['invalid']]: !isValid
			})} />

		</div>
	);
});

export default Search;