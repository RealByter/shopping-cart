import { NavLink } from 'react-router-dom';
import './Link.css';

const Link = props => {
	return (
		<NavLink
			to={props.to}
			className={({ isActive }) =>
				isActive ? 'nav-link-active nav-link' : 'nav-link'
			}>
			{props.children}
		</NavLink>
	);
};

export default Link;
