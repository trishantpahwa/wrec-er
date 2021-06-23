import { UsersConstants } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case UsersConstants.USER_LOGIN_REQUEST:
			return { ...state };
		case UsersConstants.USER_LOGIN_SUCCESS:
			return { ...state };
		case UsersConstants.USER_LOGIN_FAILURE:
			return { ...state };
		case UsersConstants.USER_LOGIN_NOT_MODIFIED:
			return { ...state };
		default:
			return state;
	}
};
