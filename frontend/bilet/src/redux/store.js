import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import favReducer from './favorites/Favorites'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fav:favReducer,
  },
})