import { createSelector } from "reselect";


export const selectCurrentUserObj = (state) => state.user

export const selectCurrentUserAuth = createSelector(
   [selectCurrentUserObj],
   (userSlice) => userSlice.currentUserAuth
)

export const selectCurrentUser = createSelector(
   [selectCurrentUserObj],
   (userSlice) => userSlice.currentUser
)

export const selectUserLoading = createSelector(
   [selectCurrentUserObj],
   (userSlice) => userSlice.loading
)