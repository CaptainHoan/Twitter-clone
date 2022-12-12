import { configureStore } from '@reduxjs/toolkit'
import addPostReducer from './postSlice'
import tweetReducer from './tweetSlice'

const store = configureStore({
    reducer: {
        ADD_POST: addPostReducer,
        ADD_TWEET: tweetReducer
    }
})

export default store