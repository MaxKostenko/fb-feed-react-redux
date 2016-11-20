import * as Actions from "../constants/AuthActionTypes";

const initialState = {
	connected: false,
	inProgress: false,
	profile_id: '',
	token: null
};

export default function auth(state = initialState, action) {
	switch (action.type) {
		case Actions.INIT_AUTH:
		case Actions.LOGIN:
		case Actions.LOGOUT:
			return {
				...state,
				...{
					inProgress: true
				}
			};
		case Actions.SET_AUTH:
			if (action.status) {
				if (action.status === 'connected') {
					return {
						...state,
						...{
							//inProgress: false,
							connected: true,
							profile_id: action.data.userID,
							token: action.data.accessToken
						}
					};
				}
				else {
					return {
						...initialState,
					};
				}
			}
			return state;

		default:
			return state;
	}
}