import { createSlice, createSelector } from "@reduxjs/toolkit";
import * as action from "./api"
const slice = createSlice({
    name:'user',
    initialState:{
        value:null,
        loading:false
    },
    reducers:{
        loginRequested: (user, action) =>{
            user.value = action.payload
            user.loading = false
        },
        requested: (user, action) =>{
            user.loading = true
        },
        requestFailed: (user,action) =>{
            user.loading = false
        },
        logoutRequested:(user, action) =>{
            user.value = null
        },
        userAdded: (user, action) => {
            user.value = action.payload
            user.loading = false
        }
        


    }
})


const {loginRequested, requested, requestFailed, logoutRequested,userAdded} = slice.actions
export default slice.reducer

const url ='/login'
export const login = (userName, password) => (dispatch, getState) => {
    dispatch(action.apiCallBegan({
        url,
        onStart: requested.type,
        onSuccess:loginRequested.type,
        onFailed: requestFailed.type,
        data: {
            userName,
            password
        },
        method: 'post'

    }))
}

export const regiseter = ({userName,fullName, email, phone, password}) => (dispatch, getState) =>{
    dispatch(
        action.apiCallBegan({
            url,
            onStart:requested.type,
            onSuccess: userAdded.type,
            onFailed:requestFailed.type,
            data:{
                userName,
                fullName,
                email,
                phone,
                password
            },
            method:"post"

        })
    )
}
export const getUser = createSelector(
    state => state.entities.user.value,
    user => user
)