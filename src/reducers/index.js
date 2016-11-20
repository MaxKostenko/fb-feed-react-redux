import {combineReducers} from "redux";
import auth from "./auth";
import posts from "./posts";
import profiles from "./profiles";
import {routerReducer} from "react-router-redux";

export default combineReducers({
	auth,
	posts,
	profiles,
	routing: routerReducer
});