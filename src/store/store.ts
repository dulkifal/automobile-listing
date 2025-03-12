import { configureStore } from '@reduxjs/toolkit';
import carsReducer from '../slices/carsSlice';
import wishlistReducer from '../slices/wishlistSlice';
import userReducer from '../slices/userSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    wishlist: wishlistReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;