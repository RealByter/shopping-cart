import './Home.css'
import { NavLink } from 'react-router-dom';

const Home = () => {
	return (
		<div className="home">
			<h2>Welcome to Fashion Factory</h2>
			<p>We'll help you catch up with today's fashion trends!</p>
			<NavLink to='/shop'>START SHOPPING!</NavLink>
		</div>
	);
};

export default Home;
