import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { cartReducer } from '../features/cart/cartSlice';
import counterReducer from '../features/counter/counterSlice';
// import
// import cartReducer from '../features/cart/cartSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // dodajemy manualnie:
    cart: cartReducer,
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
