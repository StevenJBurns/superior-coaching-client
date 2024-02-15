import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../state/redux/store/store';

// Use or alias these hooks throughout the app instead of `useDispatch` and `useSelector`
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useReduxDispatch: () => AppDispatch = useDispatch;
