import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchText: '',
  allResults: []
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload
    },
    setAllResults: (state, action) => {
      state.allResults = action.payload
    }
  }
})

export const {
  setSearchText,
  setAllResults
} = searchSlice.actions
export default searchSlice.reducer
