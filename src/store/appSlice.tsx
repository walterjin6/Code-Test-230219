import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface UserState {
  user: string
}
const initialState: UserState = {
  user: '',
}
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
  },
})

export const {
  setUser,
} = appSlice.actions

export const selectUser = (state: RootState) => state.app.user

export default appSlice.reducer
