/* global FB */
const fbAPI = {
	config: {
		appId: '1245947508789324',
		cookie: true, // enable cookies to allow the server to access the session
		xfbml: false, // parse social plugins on this page
		version: 'v2.3' // use graph api version 2.5
	},
	init: () => new Promise((resolve, reject) => {
		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		window.fbAsyncInit = () => {
			FB.init(fbAPI.config);
			FB.getLoginStatus((response) => {
				resolve(response);
			});
		};
	}),
	login: () => new Promise((resolve, reject) => {
		FB.login(resolve, {
			scope: [
				'user_birthday',
				'user_posts',
				'email',
				//'user_hometown',
				'publish_actions',
				// 'user_likes',
				//'user_status',
				'user_about_me',
				// 'user_location',
				// 'user_tagged_places',
				'user_photos',
				'user_videos',
				//'user_education_history',
				// 'user_website',
				'user_friends',
				// 'user_relationship_details',
				//'user_work_history',
				// 'user_games_activity',
				//'user_relationships'
			].join(',')
		});

	}),
	logout: () => new Promise((resolve, reject) => {
		FB.logout(resolve)
	}),
	api: (path, method, params) => new Promise((resolve, reject) => {
		FB.api(path, method, params, resolve)
	}),
	get: (path, params) => fbAPI.api(path, 'GET', params)
};

export const Posts = {
	list: (user_id) => fbAPI.get(`/${user_id}/posts`, {fields: ("application,attachments,caption,created_time,description,from,icon,link,name,message,object_id,picture,place,source,shares,status_type,type")}),
	next: (pagination_id) => {
	}
};

export const Profile = {
	get: (user_id) => fbAPI.get(`/${user_id}`, {fields: "id,name,birthday,context,email,gender"}),
	me: () => Profile.get('me'),
};

export default fbAPI;