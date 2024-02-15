import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store/store';
import initialState from '../../../data/mockAthletes.json';

export const athleteSlice = createSlice({
  name: 'athlete',
  initialState: { list: initialState.slice(0, 4)},
  reducers: {
    create: (state, action) => {
      const newAthlete = JSON.parse(action.payload);
      console.log('create ', newAthlete.id);
      state.list.push({ ...newAthlete });
    },
    getAll: state => console.log('getAll'),
    getById: state => console.log('getById'),
    update: state => console.log('update'),
    remove: (state, action) => {
      console.log('remove ', action.payload);
      const newList = state.list.filter(athlete => athlete.id !== action.payload);
      state.list = newList; 
    }
  }
});

export const { create, getAll, getById, update, remove } = athleteSlice.actions

export const selectCount = (state: RootState) => state.athletes;

export default athleteSlice.reducer;
