import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

// potrzebujemy stan, co chcemy przechowywać
export interface ProductModel {
	id: string;
	name: string;
	description: string;
	price: number;
	currency: 'PLN';
}

export interface ProductsState {
	// lista produktów:
	products: ProductModel[];
}

// zad. 2.2 Kod tworzący Slice:
// (przepis na ciasto)

const initialState: ProductsState = {
	products: [
		{
			id: '1',
			name: 'Tomb Raider',
			description: 'nice1',
			price: 151,
			currency: 'PLN',
		},
		{
			id: '2',
			name: 'Tomb Raider2',
			description: 'nice2',
			price: 152,
			currency: 'PLN',
		},
		{
			id: '3',
			name: 'Tomb Raider3',
			description: 'nice3',
			price: 153,
			currency: 'PLN',
		},
		{
			id: '4',
			name: 'Tomb Raider4',
			description: 'nice4',
			price: 154,
			currency: 'PLN',
		},
		{
			id: '5',
			name: 'Tomb Raider5',
			description: 'nice5',
			price: 155,
			currency: 'PLN',
		},
		{
			id: '6',
			name: 'Tomb Raider6',
			description: 'nice6',
			price: 156,
			currency: 'PLN',
		},
		{
			id: '7',
			name: 'Tomb Raider7',
			description: 'nice7',
			price: 157,
			currency: 'PLN',
		},
		{
			id: '8',
			name: 'Tomb Raider8',
			description: 'nice8',
			price: 158,
			currency: 'PLN',
		},
	],
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {}, //może być puste, akcję można dodać później
});

// tworzymy selector

export const selectProducts = (state: RootState) => state.products.products;

export const productsReducer = productsSlice.reducer;
