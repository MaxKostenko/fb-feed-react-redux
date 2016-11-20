import * as Actions from "../constants/PostsActionTypes";

const initialState = {
	list: [],
	next: []
};


export default function posts(state = initialState, action) {
	switch (action.type) {
		case Actions.INIT_POST_LIST:
			return {
				...state,
				...{
					list: action.data.data
				}
			};
		default:
			return state;
	}
}