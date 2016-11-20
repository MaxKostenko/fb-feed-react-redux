import * as Actions from '../constants/ProfilesActionTypes';

const initialState = {
	all: {}
};

export default function profiles(state = initialState, action) {
	switch (action.type) {
		case Actions.APPEND_PROFILE_DATA:
			return {
				...state,
				all: {
					...state.all,
					[action.data.id]: action.data
				}
			};
		default:
			return state;
	}
}