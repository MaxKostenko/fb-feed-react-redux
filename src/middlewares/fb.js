import fbAPI, {Posts, Profile} from "../lib/fbAPI";
import * as AuthActionTypes from "../constants/AuthActionTypes";
import * as AuthActions from "../actions/auth";
import * as PostsActionTypes from "../constants/PostsActionTypes";
import * as ProfilesActionTypes from "../constants/ProfilesActionTypes";

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
		case AuthActionTypes.INIT_ACCOUNT_PAGE:

			const userId = store.getState().auth.profile_id;

			const profilePromise = Profile.me().then((response) => {
				return next({
					type: ProfilesActionTypes.APPEND_PROFILE_DATA,
					data: response
				});
			});

			const postsPromise = Posts.list(userId).then((response) => {
				return next({
					type: PostsActionTypes.INIT_POST_LIST,
					data: response
				});
			});

			Promise.all([profilePromise,postsPromise]).then(
				() => {
					action.onReady();
				}
			);

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