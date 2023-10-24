import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentGeneration: 1,
  data: []
}

export const generationsSlice = createSlice({
  name: 'generations',
  initialState,
  reducers: {
    setCurrentGeneration: (state, action) => {
      state.currentGeneration = action.payload
    },
    setData: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { setCurrentGeneration, setData } = generationsSlice.actions
export default generationsSlice.reducer
