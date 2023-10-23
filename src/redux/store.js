import { configureStore } from '@reduxjs/toolkit'

import pokemon from './pokemon'
import generation from './generation'
import abilitySheet from './abilitySheet'

export const store = configureStore({
  reducer: {
    pokemon: pokemon,
    generation: generation,
    abilitySheet: abilitySheet
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
})
