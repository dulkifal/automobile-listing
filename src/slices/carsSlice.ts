import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CarDTO } from '../types';

interface CarsState {
  cars: CarDTO[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: CarsState = {
  cars: [],
  status: 'idle',
};

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const response = await fetch('http://localhost:3001/cars');
  return response.json();
});

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cars = action.payload;
      });
  },
});

export default carsSlice.reducer;