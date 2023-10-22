import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 1
}

export const generationSlice = createSlice({
  name: 'generation',
  initialState,
  reducers: {
    setGenerationId: (state, action) => {
      state.id = action.payload
    }
  }
})

export const { setGenerationId } = generationSlice.actions
export default generationSlice.reducer
