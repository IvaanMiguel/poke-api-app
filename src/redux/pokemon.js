import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color: 'red',
  name: 'Unknown name',
  info: null
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    },
    setInfo: (state, action) => {
      state.info = action.payload
    }
  }
})

export const { setColor, setName, setInfo } = pokemonSlice.actions
export default pokemonSlice.reducer
