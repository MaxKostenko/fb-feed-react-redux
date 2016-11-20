import * as AuthActionsTypes from '../constants/AuthActionTypes';

export function initAuth() {
  return { type: AuthActionsTypes.INIT_AUTH };
}

export function login() {
  return { type: AuthActionsTypes.LOGIN };
}

export function logout() {
  return { type: AuthActionsTypes.LOGOUT };
}

export function setAuth(response) {
  return {
      type: AuthActionsTypes.SET_AUTH,
      status: response.status,
      data: response.authResponse
  };
}
