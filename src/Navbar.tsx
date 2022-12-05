import { useAppDispatch } from './app/hooks';
import { toggleCart } from './features/cart/cartSlice';
import { ProductsSearch } from './features/product/ProductsSearch';

export function Navbar() {
	const dispatch = useAppDispatch();

	return (
		<nav className="navbar bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="./">
					Navbar
				</a>
				<ProductsSearch />
				<button
					className="btn btn-warning"
					onClick={() => dispatch(toggleCart())}>
					Cart
				</button>
			</div>
		</nav>
	);

	// zad. 3.6
	// dodaj akcje toggle cart, która wyświetli lub schowa koszyk
	// użyj d-block oraz d-none
	// hint: funkcja toggle
}

// utwór komponent ProductSearch, któy będzie posiadal formularz "z navbara"
