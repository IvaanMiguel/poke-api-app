import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color: 'red',
  name: 'Unknown name',
  info: null,
  species: null
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      const { name, color, info, species } = action.payload

      state.name = name
      state.color = color
      state.info = info
      state.species = species
    }
  }
})

export const { setPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer
