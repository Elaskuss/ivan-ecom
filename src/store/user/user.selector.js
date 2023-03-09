import { createSelector } from "reselect";

export const selectCurrentUserAuth = (state) => state.user.currentUserAuth;

export const selectCurrentUser = (state) => state.user.currentUser;

export const selectCurrentUserCart = createSelector(
   [selectCurrentUser],
   (currentUser) => currentUser.userCart
)