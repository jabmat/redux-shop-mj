import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Item {
    id: string;
    name: string;
    price: number;
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
            state.items.push(action.payload);
            // np. wyciągamy tylko cenę to action.payload.price

            
        },
    },
});

// export przy użyciu .actions
export const { addItem } = cartSlice.actions; 
// alternatywnie, ale dłużej
// export const addItem = cartSlice.actions.addItem;
// export const removeItem = cartSlice.actions.removeItem;

// tworzymy selector - chcemy np pobrać sobie ilość przedmiotów
export const selectItemsQuantity = (state: RootState) => {
    // uwaga zwrócić uwagę na store.ts! oraz export w this pliku
    // pobieramy aktualną ilość elementów (czyli długość)
    return state.cart.items.length;
}

// nowy Selektor do zadania 
export const selectItems = (state: RootState) => {
    return state.cart.items;
}



// export
// export default cartSlice.reducer; // domyślny

export const cartReducer = cartSlice.reducer; //inna metoda prowadzącego lepsza