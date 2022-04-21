import { createSlice } from '@reduxjs/toolkit';
import { ResultDto } from 'types';

type ScoreState = {
  results: ResultDto[];
};

export const initialState: ScoreState = {
  results: [],
};

const scoreSlice = createSlice({
  name: 'sheet',
  initialState,
  reducers: {
    add(state, action) {
      state.results = [...state.results, action.payload];
    },
  },
});

export const { add } = scoreSlice.actions;

export default scoreSlice.reducer;
