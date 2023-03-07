import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) => {
   return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
export const emailSignInStart = (email, password) => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password});
export const signInSuccess = (user) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
export const signInFail = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAIL, error);

export const emailSignUpStart = (email, password, additionalInformation) => createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, {email, password, additionalInformation});
export const emailSignUpSuccess = (user, additionalInformation) => createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_SUCCESS, {user, additionalInformation});
export const emailSignUpFail = (error) => createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_FAIL, error);

export const singOutStart = () => createAction(USER_ACTION_TYPES.SIGN_OUT_START)
export const singOutSuccess = () => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS)
export const singOutFail = (error) => createAction(USER_ACTION_TYPES.SIGN_OUT_FAIL, error)

