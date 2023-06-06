import { NavLink } from 'react-router-dom';
import styles from './Link.module.css';

const Link = props => {
	return (
		<NavLink
			to={props.to}
			className={({ isActive }) =>
				isActive
					? `${styles['nav-link-active']} ${styles['nav-link']}`
					: styles['nav-link']
			}>
			{props.children}
		</NavLink>
	);
};

export default Link;
