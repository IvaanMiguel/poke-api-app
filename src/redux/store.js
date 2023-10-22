import { configureStore } from '@reduxjs/toolkit'
import pokemon from './pokemon'

export const store = configureStore({
  reducer: {
    pokemon: pokemon
  }
})
