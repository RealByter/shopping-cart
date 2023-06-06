import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Welcome to Fashion Factory</h2>
			<p className={styles.subtext}>We'll help you catch up with today's fashion trends!</p>
			<NavLink to='/shop' className={styles.cta}>START SHOPPING!</NavLink>
		</div>
	);
};

export default Home;
