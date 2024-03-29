import { FETCH_PHOTO,FETCH_PHOTO_SUCCESS,FETCH_PHOTO_ERROR } from "./constants";

const initialState={
    photo:[],
    loading:false,
    error:null
}

export const photoReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_PHOTO:
            return {
                ...state,
                loading: true
            }
        case FETCH_PHOTO_SUCCESS:
            console.log('i am reducer',{ ...state,
                photo:action.payload,})
            return {
                ...state,
                photo:action.payload,
            }
        case FETCH_PHOTO_ERROR:
            return {
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}

export default photoReducer