import {FETCH_PHOTO,FETCH_PHOTO_SUCCESS,FETCH_PHOTO_ERROR} from './constants'


export const fetchPhoto=(id)=>{
    return {
        type:FETCH_PHOTO,
  payload:id
    }
}

export const fetchPhotoSuccess=(data)=>{
    console.log(data)
    return{
        type:FETCH_PHOTO_SUCCESS,
        payload:data
    }
}

export const fetchPhotoError=()=>{
    return {
        type:FETCH_PHOTO_ERROR,
        payload:{}
    }
}