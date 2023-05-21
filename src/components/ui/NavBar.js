import './NavBar.css';
import NavLink from './NavLink';

const NavBar = () => {
	return (
		<div className="navbar-container">
			<div className="navbar">
				<h1 className="nav-title">Fashion Factory</h1>
				<div className="nav-links">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/shop">Shop</NavLink>
					<NavLink to="/cart">Cart</NavLink>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
