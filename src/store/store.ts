import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
// import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: {
    user: userSlice
  },
})

// const persistor = persistStore(store);
// export { store, persistor };


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch