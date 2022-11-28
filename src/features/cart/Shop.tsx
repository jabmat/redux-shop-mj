// podejście klasowe lub funkcyjne

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Cart } from "./Cart";
import { addItem, Item, selectItemsQuantity } from "./cartSlice";
import { Product } from "./Product";

// funkcyjne:
export function Shop() {
	// obsługa, alias na Hook - dispatch
	// const dispatch = useAppDispatch();

	// ile jest naszych itemów, informacja - wyciągnij ze stanu:
	// const quantity = useAppSelector(selectItemsQuantity);

	const product: Item = {
		id: '1',
		name: 'Tomb Raider',
		price: 150,
	};
	// zad. 1
	// Utwórz komponent Cart, który wyświetli informacje o statnie koszyka

	// zad. 2
	// Utwórz komponent Produkt który z opcja dodania do koszyka

	// Zad. 3 dla chętnych (dodatkowe selectory, itd.)
	// Wyświetl w koszyku dostępne produktu

	// zad. 4. dodaj stylowanie i jakąś ikonkę koszyka
	// Dodaj stylowanie i ikonkę koszyka

	// tworzymy komponent
	return (
		<div>
            <Cart />
            
            <Product name={product.name} id={product.id} price={product.price} />
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