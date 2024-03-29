import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { fetchPhotoSuccess, fetchPhotoError } from './actions';
import { FETCH_PHOTO } from './constants';

export const fetchPhotosEpic = action$ => action$.pipe(
  ofType(FETCH_PHOTO),
  switchMap(action => {
    // Default URL
    let url = `http://localhost:3001/externalapi/photos?`;

    // Extract pagination and filtering parameters from action payload
    const { limit = 25, offset = 0, title = '', userEmail = '',albumTitle='' } = action.payload;

    // Append filters to the URL if they exist
    if(title && albumTitle && userEmail){
      url+=`title=${title}&albumTitle=${albumTitle}&userEmail=${userEmail}&`
    }
    else if(title && albumTitle){
      url+=`title=${title}&albumTitle=${albumTitle}&`
    }
    else if(title && userEmail){
      url+=`title=${title}&userEmail=${userEmail}&`
    }
    else if(albumTitle && userEmail){
      url+=`albumTitle=${albumTitle}&userEmail=${userEmail}&`
    }
    else if (title) {
      url += `title=${title}&`;
    }
    else if (userEmail) {
      url += `userEmail=${userEmail}&`;
    }
    else if(albumTitle){
      url+=`albumTitle=${albumTitle}&`
    }

    // Append pagination parameters to the URL
    url += `limit=${limit}&offset=${offset}`;

    return ajax.getJSON(url).pipe(
      map(response => {
        console.log('I am epics response', response); // Log the response
        return fetchPhotoSuccess(response);
      }),
      catchError(error => of(fetchPhotoError(error)))
    );
  })
);

export default fetchPhotosEpic;
