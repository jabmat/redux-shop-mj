// podejście klasowe lub funkcyjne

import { useAppSelector } from '../../app/hooks';
import { ProductModel, selectProducts } from '../product/productsSlice';
import { Cart } from './Cart';
import { Item } from './cartSlice';
import './Shop.css';
import { Product } from './Product';

// funkcyjne:
export function Shop() {
	// obsługa, alias na Hook - dispatch
	// const dispatch = useAppDispatch();

	// ile jest naszych itemów, informacja - wyciągnij ze stanu:
	// const quantity = useAppSelector(selectItemsQuantity);

	// const product: Item = {
	// 	id: '1',
	// 	name: 'Tomb Raider',
	// 	price: 150,
	// };

	const products: ProductModel[] = useAppSelector(selectProducts);

	// zad. 1
	// Utwórz komponent Cart, który wyświetli informacje o statnie koszyka

	// zad. 2
	// Utwórz komponent Produkt który z opcja dodania do koszyka

	// Zad. 3 dla chętnych (dodatkowe selectory, itd.)
	// Wyświetl w koszyku dostępne produktu

	// zad. 4. dodaj stylowanie i jakąś ikonkę koszyka
	// Dodaj stylowanie i ikonkę koszyka

	// zad. 2.1
	// Dodaj tablicę produktów (np. 8 produktów)

	// zad. 2.2
	// Wyświetl wszystkie produkty w komponencie

	// tworzymy komponent
	return (
		<div>
			<Cart />
			{/* dla 1 obiektu */}
			{/* <Product name={product.name} id={product.id} price={product.price} /> */}

			{/* mapowanie po products */}
			<div className="products-list">
				{products.map((product, key) => (
					<Product name={product.name} id={product.id} price={product.price} />
				))}
			</div>
		</div>
	);
}

// ile jest naszych itemów, informacja - wyciągnij ze stanu:
// 	const quantity = useAppSelector(selectItemsQuantity);

// 	const product: Item = {
// 		id: '1',
// 		name: 'Tomb Raider',
// 		price: 150,
// }
