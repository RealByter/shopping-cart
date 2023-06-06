import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './normalize.css';
import './reset.css';
import './App.css';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import NavBar from './components/ui/NavBar';

const shopItems = [
	{
		name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		price: 109.95,
		image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
	},
	{
		name: 'Mens Casual Premium Slim Fit T-Shirts',
		price: 22.3,
		image:
			'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
	},
	{
		name: 'Mens Cotton Jacket',
		price: 55.99,
		image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
	},
	{
		name: 'Mens Casual Slim Fit',
		price: 15.99,
		image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
	},
	{
		name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
		price: 695,
		image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
	},
	{
		name: 'Solid Gold Petite Micropave',
		price: 168,
		image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
	},
	{
		name: 'White Gold Plated Princess',
		price: 9.99,
		image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
	},
	{
		name: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
		price: 10.99,
		image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
	},
	{
		name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
		price: 56.99,
		image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
	},
	{
		name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
		price: 29.95,
		image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
	},
	{
		name: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
		price: 39.99,
		image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
	},
	{
		name: "MBJ Women's Solid Short Sleeve Boat Neck V",
		price: 9.85,
		image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
	},
	{
		name: "Opna Women's Short Sleeve Moistures",
		price: 7.95,
		image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
	},
	{
		name: 'DANVOUY Womens T Shirt Casual Cotton Short',
		price: 12.99,
		image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
	},
];

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop items={shopItems} />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
