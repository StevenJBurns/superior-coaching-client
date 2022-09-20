import { configureStore } from '@reduxjs/toolkit';
import athleteReducer from '../slices/athleteSlice';

export const store = configureStore({
  reducer: {
    // auth: () => {},
    // coaches: () => {},
    athletes: athleteReducer,
    // annualPlans: () => {},
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
