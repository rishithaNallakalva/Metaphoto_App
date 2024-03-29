import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { photoReducer } from './FirstScreen/reducer';
import { fetchPhotosEpic } from './FirstScreen/epics';

const epicMiddleware = createEpicMiddleware();
const loggerMiddleware = store => next => action => {
  console.log('Dispatching action:', action);
  const result = next(action);
  console.log('Updated state:', store.getState());
  return result;
};

const rootReducer = combineReducers({
  photo: photoReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware, loggerMiddleware)
);

epicMiddleware.run(fetchPhotosEpic);

export default store;
