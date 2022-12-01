import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Item {
	id: string;
	name: string;
	price: number;
	quantity: number;
}

// export interface Items {
// 	id: string;
// 	name: string;
// 	price: number;
// }

// tworzymy interfejs określający co będziemy w stanie przechowywać
export interface CartState {
	items: Item[]; // tablica itemów

	isDisplayed: boolean;
}

// tworzymy początkową wartość (initial state):
const initialState: CartState = {
	items: [],
	isDisplayed: false,
};

// ad. 3.3 - dodatkowo
// tworzenie funkcji przyjmującej parametry
// const remove = (items: Item[], id: string) => {
// 	// np
// 	items = items.filter((i) => i.id !== id);
// };
// i wtedy wywołujemy remove

// dodajemy produkt, tworzymy kawałek stanu:
export const cartSlice = createSlice({
	name: 'cart', //nazwa własna, jaką chcemy
	initialState, // skrótowiec ze względu na zmienną const  initialState, nie trzeba :
	reducers: {
		addItem: (state, action: PayloadAction<Item>) => {
			// items [] .push wrzuca na koniec tablicy, a to jest tablica
			// state.items = [];
			const item = state.items.find((i) => i.id === action.payload.id);

			if (item) {
				// jeżeli tak
				item.quantity++; // zwieksz ilosc o jeden
			} else {
				// jezeli nie
				state.items.push(action.payload); // dodaj element do koszyka
			}

			// state.items.push(action.payload);
			// np. wyciągamy tylko cenę to action.payload.price
		},
		removeItem: (state, action: PayloadAction<string>) => {
			// przefiltrowanie tablicy aby nie zawierała konkretnego elementu id
			const id = action.payload;

			// state.item [ {id: '1', name: 'Produkt 1'}, {id: '2', name: 'Produkt 2'}];
			// id = 2

			const itemsWithoutGivenItem = state.items.filter(
				(item) => item.id !== id
			);

			state.items = itemsWithoutGivenItem;
		},
		// ad. 3.3
		increaseQuantity: (state, action: PayloadAction<string>) => {
			const id = action.payload;

			const item = state.items.find((i) => i.id === id);

			if (item) {
				item.quantity++;
			}
		},
		// ad. 3.3
		descreaseQuantity: (state, action: PayloadAction<string>) => {
			const id = action.payload;

			const item = state.items.find((i) => i.id === id);

			if (item) {
				if (item.quantity > 1) {
					item.quantity--;
				} else {
					state.items = state.items.filter((i) => i.id !== id);
				}
			}
		},
		toggleCart: (state) => {
			// isDisplated => true -> false
			state.isDisplayed = !state.isDisplayed;
		},
	},
});

// zad. 2.3
// removeItem - usuwanie
// podpiąć tą akcję do koszyka

// zad. 2.5
// zmodyfikuj model koszyka i akcje addItem tak aby zliczał ilość i nie powielał elementów, tylko element (ilość) - wystarczy array, trzeba zmodyfikować model

// export przy użyciu .actions
// (dodano removeItem)
export const {
	addItem,
	removeItem,
	increaseQuantity,
	descreaseQuantity,
	toggleCart,
} = cartSlice.actions;
// alternatywnie, ale dłużej
// export const addItem = cartSlice.actions.addItem;
// export const removeItem = cartSlice.actions.removeItem;

// tworzymy selector ad. 3.4 'isDisplayed'
export const selectIsDisplayed = (state: RootState) => {
	return state.cart.isDisplayed;
};

// tworzymy selector - chcemy np pobrać sobie ilość przedmiotów
export const selectItemsQuantity = (state: RootState) => {
	// uwaga zwrócić uwagę na store.ts! oraz export w this pliku
	// pobieramy aktualną ilość elementów (czyli długość)

	// zad. 3.1
	// wyłączamy total jak korzystamy z reduce
	// let total = 0;

	// Junior Level
	// for (let i = 0; i < state.cart.items.length; i++) {
	//     // wyciągamy quantity i dodajemy do sumy
	//     total += state.cart.items[i].quantity;
	// }

	// wersja z for each Junior+ Level
	// state.cart.items.forEach(item => {
	//     total = + item.quantity;
	// })

	// funkcja reduce (szybsza od for each) Medium Level
	// jeżeli tablica wygląda tak [ {quantity: 2}, { quantity: 3}]
	const total = state.cart.items.reduce((acc, item) => {
		acc += item.quantity;
		return acc; // (1 iteracja) acc = 0 => 2; (2) 2 => 2+3=5
	}, 0); // acc = 0;

	// zad. 2.6
	// zmodyfikuj selector:
	// modyfikacja zad. 3.1
	// return state.cart.items.length;
	return total;
};

// zad. 3.2 Utwórz selektor który zwróci całkowitą sumę koszyka
// tworzymy selektor, podsumowujemy koszyk i wyświetlamy w komponencie koszyk
export const selectTotal = (state: RootState) => {
	let total = 0;

	state.cart.items.forEach((item) => {
		total += item.price * item.quantity;
	});

	return total;
};

// zad. 3.3
// Utwórz dwie akcję w cartSlice, które kolejno usuną jedną sztuke produktu z koszyka lub dodadzą
// W przypadku gdy ilość = 1 , produkt powinien byc usunięty całkowicie
// Dodaj w produkcie Cart dwa przyciski które wykonają powyższe akcje

// nowy Selektor do zadania
export const selectItems = (state: RootState) => {
	return state.cart.items;
};

// export
// export default cartSlice.reducer; // domyślny

export const cartReducer = cartSlice.reducer; //inna metoda prowadzącego lepsza
