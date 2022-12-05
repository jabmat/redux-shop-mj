import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchProducts } from './productsAPI';

// potrzebujemy stan, co chcemy przechowywać
export interface ProductModel {
	id: string;
	name: string;
	description: string;
	price: number;
	currency: string;
}

export interface ProductsState {
	// lista produktów:
	products: ProductModel[];
	// dodajemy zadanie domowe
	searchResults: ProductModel[];
}

// zad. 2.2 Kod tworzący Slice:
// (przepis na ciasto)
const productsList = [
	{
		id: '1',
		name: 'Tomb Raider',
		description: 'nice1',
		price: 151,
		currency: 'PLN',
	},
	{
		id: '2',
		name: 'Crash',
		description: 'nice2',
		price: 152,
		currency: 'PLN',
	},
	{
		id: '3',
		name: 'Detention',
		description: 'nice3',
		price: 153,
		currency: 'PLN',
	},
	{
		id: '4',
		name: 'Diablo 2',
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
];

const initialState: ProductsState = {
	products: productsList,
	searchResults: productsList,
};

// nowe
export const loadProducts = createAsyncThunk(
	'products/getProducts',
	async (): Promise<ProductModel[]> => {
		const productsResponse = await fetchProducts();

		console.log(productsResponse);
		// const products = produc
		const products = productsResponse.map((product) => {
			return {
				id: product.toString(),
				name: product.title,
				description: product.description,
				price: product.price,
				currency: 'PLN',
			};
		});
	}
);

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		searchProducts: (
			state: ProductsState,
			action: PayloadAction<{ query: string }>
		) => {
			// wyszukujemy jakoś te produkty (trudniejsza część):
			// needujemy osobną listę, która nam przefiltruje listę, specjalnie na ten użytek
			const { query } = action.payload;

			state.searchResults = state.products.filter((product) =>
				product.name.toLowerCase().includes(query)
			);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loadProducts.fulfilled, (state, action) => {
			state.products = action.payload;
			state.searchResults = action.payload;
		});
	},
});

// tworzymy selector

export const selectProducts = (state: RootState) => state.products.products;

// now zadanie domowe
export const selectSearchResults = (state: RootState) =>
	state.products.searchResults;

export const { searchProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
