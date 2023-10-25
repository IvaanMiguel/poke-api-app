import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 1,
  name: '',
  info: null,
  species: {},
  abilities: null
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    // setPokemon: (state, action) => {
    //   const { id, name, species } = action.payload
    //   state.id = id
    //   state.name = name
    //   state.species = species
    // },
    setId: (state, action) => {
      state.id = action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    },
    setInfo: (state, action) => {
      state.info = action.payload
    },
    setSpecies: (state, action) => {
      state.species = action.payload
    },
    setAbilities: (state, action) => {
      state.abilities = action.payload
    }
  }
})

export const {
  setId,
  setName,
  setInfo,
  setSpecies,
  setAbilities
} = pokemonSlice.actions
export default pokemonSlice.reducer
