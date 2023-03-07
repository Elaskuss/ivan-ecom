import { USER_ACTION_TYPES } from "./user.types";

const INIT_STATE = {
   currentUser: null,
   isLoading: false,
   error: null,
};

export const userReducer = (state = INIT_STATE, action) => {
   const { type, payload } = action;
   switch (type) {
      case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
         return {
            ...state,
            currentUser: payload,
         };
      case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
         return {
            ...state,
            currentUser: null,
         }
      case USER_ACTION_TYPES.SIGN_IN_FAIL:
      case USER_ACTION_TYPES.SIGN_OUT_FAIL:
      case USER_ACTION_TYPES.EMAIL_SIGN_UP_FAIL:
         return {
            ...state,
            error: payload,
         };
      default:
         return state;
   }
};
