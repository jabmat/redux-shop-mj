// podejście klasowe lub funkcyjne

import { Cart } from './Cart';
import { Item } from './cartSlice';
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

	const products: Item[] = [
		{
			id: '1',
			name: 'Tomb Raider',
			price: 151,
		},
		{
			id: '2',
			name: 'Tomb Raider2',
			price: 152,
		},
		{
			id: '3',
			name: 'Tomb Raider3',
			price: 153,
		},
		{
			id: '4',
			name: 'Tomb Raider4',
			price: 154,
		},
		{
			id: '5',
			name: 'Tomb Raider5',
			price: 155,
		},
		{
			id: '6',
			name: 'Tomb Raider5',
			price: 156,
		},
		{
			id: '7',
			name: 'Tomb Raider5',
			price: 157,
		},
		{
			id: '8',
			name: 'Tomb Raider5',
			price: 158,
		},
	];

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
			{products.map((product, key) => (
				<Product name={product.name} id={product.id} price={product.price} />
			))}
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
