import { createSlice } from '@reduxjs/toolkit';
import { ResultDto } from 'types';

type ResultState = {
  results: ResultDto[];
};

export const initialState: ResultState = {
  results: [],
};

const resultSlice = createSlice({
  name: 'sheet',
  initialState,
  reducers: {
    add(state, action) {
      state.results = [...state.results, action.payload];
    },
  },
});

export const { add } = resultSlice.actions;

export default resultSlice.reducer;
