import { configureStore } from '@reduxjs/toolkit'
import pokeColorReducer from './pokeColorReducer'

export const store = configureStore({
  reducer: {
    pokeColor: pokeColorReducer
  }
})
