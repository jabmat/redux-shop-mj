import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { cartReducer } from '../features/cart/cartSlice';
import counterReducer from '../features/counter/counterSlice';
import { notificationsReducer } from '../features/notifications/notificationsSlice';
import { productsReducer } from '../features/product/productsSlice';
// import
// import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		// dodajemy manualnie:
		cart: cartReducer,
		products: productsReducer,
		notifications: notificationsReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
