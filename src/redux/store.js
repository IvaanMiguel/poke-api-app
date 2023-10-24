import { configureStore } from '@reduxjs/toolkit'

import pokemon from './pokemon'
import generations from './generations'
import abilitySheet from './abilitySheet'

export const store = configureStore({
  reducer: {
    pokemon: pokemon,
    generations: generations,
    abilitySheet: abilitySheet
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
})
