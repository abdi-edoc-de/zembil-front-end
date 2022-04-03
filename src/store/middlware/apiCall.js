import * as actions from '../api'
import axios from 'axios'
const apiCall = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action)
    const { url, onStart, onFailed, onSuccess, data, method } = action.payload

    if (onStart) dispatch({type: onStart})
    next(action)

    try {
        // const response = await axios.request({
        //     baseURL:'something',
        //     url,
        //     method,
        //     data
        // })
        const response = {data:{
            name: 'papi',
            token: 'token'
        }}
        console.log('this', 'here')
        dispatch(actions.apiCallSuccess(response.data))
        if (onSuccess) dispatch({type:onSuccess,payload:response.data})
    } catch (error) {
        dispatch(actions.apiCallFailed(error.message))
        if (onFailed) dispatch({type:onFailed, payload:error.data})
    }


}

export default apiCall;