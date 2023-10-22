import { configureStore } from '@reduxjs/toolkit'

import pokemon from './pokemon'
import generation from './generation'

export const store = configureStore({
  reducer: {
    pokemon: pokemon,
    generation: generation
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
})
