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

export const selectCurrentUserShippingAdress = createSelector(
   [selectCurrentUser],
   (currentUserSlice) => currentUserSlice.shippingAdress
)

export const selectUserLoading = createSelector(
   [selectCurrentUserObj],
   (userSlice) => userSlice.loading
)

export const selectSavedItems = createSelector(
   [selectCurrentUser],
   (userSlice) => userSlice.savedItems
)
