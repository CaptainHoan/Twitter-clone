import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tweet: []
}

export const tweetSlice = createSlice({
    name: 'ADD_TWEET',
    initialState,
    reducers: {
        addTweet: (state, action) => {
            state.tweet = [...state.tweet, action.payload].reverse()
            console.log('My Reducers', state.tweet)
        },
        removeTweet: (state, action) => {
            const index = state.tweet.findIndex(
                (value) => value.name === action.payload.name
            )

            const newTweet = [...state.tweet]

            newTweet.splice(index,1)

            state.tweet = newTweet
            console.log('My filter tweet is', newTweet)
        }
    }
})

export const { addTweet, removeTweet } = tweetSlice.actions

//export tweetSelector
export const tweetSelector = (state) => state.ADD_TWEET.tweet

export const tweetSelectorUser = (state) => 
state.ADD_TWEET.tweet.filter(value => value.name === "SynLink")

export default tweetSlice.reducer