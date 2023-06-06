import ShopItem from '../items/ShopItem';
import styles from './Shop.module.css';

const Shop = props => {
	return (
		<div>
			<h1 className={styles.header}>Shop</h1>
			<div className={styles.shopItems}>
				{props.items?.map((item, index) => (
					<ShopItem key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default Shop;
