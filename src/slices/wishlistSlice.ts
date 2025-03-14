import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CarDTO } from '../types';

interface WishlistState {
  wishlist: CarDTO[];
}

const initialState: WishlistState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<CarDTO>) => {
      // Check if the car is already in the wishlist
      if (!state.wishlist.some((car) => car.id === action.payload.id)) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter((car) => car.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;