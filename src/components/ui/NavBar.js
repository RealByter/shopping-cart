import './NavBar.css';
import Link from './Link';

const NavBar = () => {
	return (
		<>
			<div className="nav-filler"></div>
			<div className="navbar-container">
				<div className="navbar">
					<h1 className="nav-title">Fashion Factory</h1>
					<div className="nav-links">
						<Link
							className={({ isActive }) => isActive && 'nav-link-active'}
							to="/">
							Home
						</Link>
						<Link
							className={({ isActive }) => isActive && 'nav-link-active'}
							to="/shop">
							Shop
						</Link>
						<Link
							className={({ isActive }) => isActive && 'nav-link-active'}
							to="/cart">
							<i
								className="fa-sharp fa-solid fa-cart-shopping fa-sm"
								style={{ color: '#191919' }}></i>
							Cart
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
