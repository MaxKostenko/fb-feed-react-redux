import {
  createStore,
  applyMiddleware,
  compose
}
from 'redux';
import rootReducer from '../reducers';
import fb from '../middlewares/fb';


/*
import { applyMiddleware } from 'redux';
import { fb } from './middlewares/fb';
applyMiddleware( fb )
*/

export default function configureStore(initialState) {

  const enhancers = [applyMiddleware(fb)];
  if( window.__REDUX_DEVTOOLS_EXTENSION__ )
    enhancers.push( window.__REDUX_DEVTOOLS_EXTENSION__() );

  const store = createStore(
    rootReducer,
    initialState,
    compose(...enhancers)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
