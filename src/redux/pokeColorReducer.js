import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pokeColor: 'black'
}

export const pokeColorSlice = createSlice({
  name: 'pokeColor',
  initialState,
  reducers: {
    setColor: (state, action) => {
      const { color } = action.payload
      state.pokeColor = color
    }
  }
})

export const { setColor } = pokeColorSlice.actions
export default pokeColorSlice.reducer
