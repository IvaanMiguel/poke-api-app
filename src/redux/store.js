import { configureStore } from '@reduxjs/toolkit'

import pokemon from './pokemon'
import generations from './generations'
import abilitySheet from './abilitySheet'
import search from './search'
import pokedex from './pokedex'

export const store = configureStore({
  reducer: {
    pokemon: pokemon,
    generations: generations,
    abilitySheet: abilitySheet,
    search: search,
    pokedex: pokedex
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
})
