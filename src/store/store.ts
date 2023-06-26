import { useDispatch , TypedUseSelectorHook , useSelector } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { moviesApi, moviesSlice } from './moviesSlice';

const store = configureStore({
  reducer:{
    'movie':moviesSlice.reducer,
    [moviesApi.reducerPath]:moviesApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moviesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { store , useAppDispatch , useAppSelector }