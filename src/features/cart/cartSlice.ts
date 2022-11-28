import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

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
}

// tworzymy początkową wartość (initial state):
const initialState: CartState = {
    items: [],
};

// dodajemy produkt, tworzymy kawałek stanu:
export const cartSlice = createSlice({
    name: 'cart', //nazwa własna, jaką chcemy
    initialState, // skrótowiec ze względu na zmienną const  initialState, nie trzeba :
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            // items [] .push wrzuca na koniec tablicy, a to jest tablica
            // state.items = [];
            const item = state.items.find(i => i.id === action.payload.id);

            if (item) {
                // jeżeli tak
                item.quantity++; // zwieksz ilosc o jeden
            } else {
                // jezeli nie
                state.items.push(action.payload); // dodaj element do koszyka
            }

            state.items.push(action.payload);
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
    },
});

// zad. 2.3
// removeItem - usuwanie
// podpiąć tą akcję do koszyka

// zad. 2.5
// zmodyfikuj model koszyka i akcje addItem tak aby zliczał ilość i nie powielał elementów, tylko element (ilość) - wystarczy array, trzeba zmodyfikować model



// export przy użyciu .actions
// (dodano removeItem)
export const { addItem, removeItem } = cartSlice.actions; 
// alternatywnie, ale dłużej
// export const addItem = cartSlice.actions.addItem;
// export const removeItem = cartSlice.actions.removeItem;

// tworzymy selector - chcemy np pobrać sobie ilość przedmiotów
export const selectItemsQuantity = (state: RootState) => {
    // uwaga zwrócić uwagę na store.ts! oraz export w this pliku
    // pobieramy aktualną ilość elementów (czyli długość)

    // zad. 2.6
    // zmodyfikuj selector:
    return state.cart.items.length;
}

// nowy Selektor do zadania 
export const selectItems = (state: RootState) => {
    return state.cart.items;
}



// export
// export default cartSlice.reducer; // domyślny

export const cartReducer = cartSlice.reducer; //inna metoda prowadzącego lepsza