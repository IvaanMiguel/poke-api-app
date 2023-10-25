import { createSlice } from '@reduxjs/toolkit'
import { themeColors } from '../constants'
import { getIdFromUrl, getLocalizedString } from '../utils'

const initialState = {
  colors: {},
  types: {}
}

export const  pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    setColors: (state, action) => {
      action.payload.forEach(color => {
        color.pokemon_species.forEach(species => {
          state.colors[species.name] = themeColors[color.name] ?? color.name
        })
      })
    },
    setTypes: (state, action) => {
      action.payload.forEach(type => {
        type.pokemon.forEach(pokemon => {
          const id = getIdFromUrl(pokemon.pokemon.url)

          if (state.types[id]) {
            state.types[id].push(getLocalizedString(type.names).name)
            return
          }
          state.types[id] = new Array(getLocalizedString(type.names).name)
        })
      })
    }
  }
})

export const { setColors, setTypes } = pokedexSlice.actions
export default pokedexSlice.reducer
