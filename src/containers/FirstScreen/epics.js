import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { fetchPhotoSuccess, fetchPhotoError } from './actions';
import { FETCH_PHOTO } from './constants';

// Define the base URL for development and production
const BASE_URL_DEV = 'http://localhost:3001';
const BASE_URL_PROD = 'https://example.com/api';

export const fetchPhotosEpic = action$ => action$.pipe(
  ofType(FETCH_PHOTO),
  switchMap(action => {
    // Determine the base URL based on the environment
    const baseUrl = process.env.NODE_ENV === 'production' ? BASE_URL_PROD : BASE_URL_DEV;

    // Extract pagination and filtering parameters from action payload
    const { limit = 25, offset = 0, title = '', userEmail = '', albumTitle = '' } = action.payload;

    // Construct the complete URL with pagination and filtering parameters
    let url = `${baseUrl}/externalapi/photos?`;

    // Append filters to the URL if they exist
    if (title && albumTitle && userEmail) {
      url += `title=${title}&albumTitle=${albumTitle}&userEmail=${userEmail}&`;
    } else if (title && albumTitle) {
      url += `title=${title}&albumTitle=${albumTitle}&`;
    } else if (title && userEmail) {
      url += `title=${title}&userEmail=${userEmail}&`;
    } else if (albumTitle && userEmail) {
      url += `albumTitle=${albumTitle}&userEmail=${userEmail}&`;
    } else if (title) {
      url += `title=${title}&`;
    } else if (userEmail) {
      url += `userEmail=${userEmail}&`;
    } else if (albumTitle) {
      url += `albumTitle=${albumTitle}&`;
    }

    // Append pagination parameters to the URL
    url += `limit=${limit}&offset=${offset}`;

    // Make the AJAX request using the constructed URL
    return ajax.getJSON(url).pipe(
      map(response => fetchPhotoSuccess(response)),
      catchError(error => of(fetchPhotoError(error)))
    );
  })
);

export default fetchPhotosEpic;
