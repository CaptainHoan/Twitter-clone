import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: "",
    profileName: "",
    userURL: '',
    text: "",
    userReply: '',
    userRetweet: '',
    userLikes: '',
    userUpload: ''
}

export const addPostSlice = createSlice({
    name: 'ADD_POST',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.text = action.payload
            console.log('state.text is', state.text)
        },
        addUserName: (state, action) => {
            state.userName = action.payload
            console.log('state.userName is', state.userName)
        },
        addProfileName: (state, action) => {
            state.profileName = action.payload
            console.log('state.profileName is', state.profileName)
        },
        addUserURL: (state, action) => {
            state.userURL = action.payload
            console.log('state.userURL is', state.userURL)
        },
        addUserReply: (state, action) => {
            state.userReply = action.payload
            console.log('state.userReply is', state.userReply)
        },
        addUserRetweet: (state, action) => {
            state.userRetweet = action.payload
            console.log('state.userRetweet is', state.userRetweet)
        },
        addUserLikes: (state, action) => {
            state.userLikes = action.payload
            console.log('state.userLikes is', state.userLikes)
        },
        addUserUpload: (state, action) => {
            state.userUpload = action.payload
            console.log('state.userUpload', state.userUpload)
        } 
    }
})

export const {addPost, 
    addUserName, 
    addProfileName, 
    addUserURL, 
    addUserReply, 
    addUserRetweet, 
    addUserLikes,
    addUserUpload
} = addPostSlice.actions

// Export selector from redux
export const selectText = (state) => state.ADD_POST.text
export const selectUserName = (state) => state.ADD_POST.userName
export const selectProfileName = (state) => state.ADD_POST.profileName
export const selectUserURL = (state) => state.ADD_POST.userURL
export const selectUserReply = (state) => state.ADD_POST.userReply
export const selectUserRetweet = (state) => state.ADD_POST.userRetweet
export const selectUserLikes = (state) => state.ADD_POST.userLikes
export const selectUserUpload = (state) => state.ADD_POST.userUpload

//Export reducer from redux
export default addPostSlice.reducer