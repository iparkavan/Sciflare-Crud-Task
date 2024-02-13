import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { stat } from 'fs'
import { User } from '@/types/user-types'

// Define a type for the slice state
interface userPorps {
  userInfo: User | undefined
  isAuthenticated: boolean
}

// Define the initial state using that type
const initialState: userPorps = {
  userInfo: undefined,
  isAuthenticated: false

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
      console.log(action.payload)

      switch (action.payload.status) {
        case 'LOGIN':
          state.isAuthenticated  = false;
          // localStorage.setItem("isLoggedIn", 'true')
        case 'LOGOUT':
          state.isAuthenticated =  true;
        default:
          state.isAuthenticated
      }
    },
  },
})

export const { setUserInfo } = userSlice.actions

export default userSlice.reducer