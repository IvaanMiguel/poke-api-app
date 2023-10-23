import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showAbilitySheet: false,
  abilitySheetId: 0
}

export const abilitySheetSlice = createSlice({
  name: 'abilitySheet',
  initialState,
  reducers: {
    setShowAbilitySheet: (state, action) => {
      state.showAbilitySheet = action.payload
    },
    setAbilitySheetId: (state, action) => {
      state.abilitySheetId = action.payload
    }
  }
})

export const { setShowAbilitySheet, setAbilitySheetId } = abilitySheetSlice.actions
export default abilitySheetSlice.reducer
