import fbAPI, {Posts} from '../lib/fbAPI';
import * as AuthActionTypes from '../constants/AuthActionTypes';
import * as AuthActions from '../actions/auth';
import * as PostsActionTypes from '../constants/PostsActionTypes';

const fb = store => next => action => {
  const AuthResponse = (response) => {
    next(AuthActions.setAuth(response));
  };

  console.log(action);
  switch (action.type) {
    case AuthActionTypes.INIT_AUTH:
      fbAPI.init().then(AuthResponse);
      return next(action);
    case AuthActionTypes.LOGIN:
      fbAPI.login().then(AuthResponse);
      return next(action);
    case AuthActionTypes.LOGOUT:
      fbAPI.logout().then(AuthResponse);
      return next(action);
    case PostsActionTypes.INIT_POST_LIST:
      Posts.list( action.userId ).then( (response) => {
        return next({
          ...action,
          ...response
        });
      } ).then( () => { action.onReady(); } );
      break;
      
    default:
      return next(action);
  }
  /*
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result*/



};

export default fb;