import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store/store';
import initialState from '../../../data/athletes.json';

export const athleteSlice = createSlice({
  name: 'athlete',
  initialState: { list: initialState},
  reducers: {
    create: (state, action) => {
      const athlete = JSON.parse(action.payload);
      console.log('create');
      console.log({athlete});
      state.list.push({ ...athlete });
    },
    getAll: state => console.log('getAll'),
    getById: state => console.log('getById'),
    update: state => console.log('update'),
    remove: (state, action) => {
      console.log('remove', action.payload);
      const newList = state.list.filter(athlete => athlete.id !== action.payload);
      state.list = newList; 
    }
  }
});

export const { create, getAll, getById, update, remove } = athleteSlice.actions

export const selectCount = (state: RootState) => state.athletes;

export default athleteSlice.reducer;
