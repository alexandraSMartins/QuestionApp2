import { configureStore } from '@reduxjs/toolkit'
import questionsReducer from './reducers/questions.reducer'

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch