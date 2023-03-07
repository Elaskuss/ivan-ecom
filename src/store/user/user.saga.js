import { all, call, put, takeLatest } from "redux-saga/effects";
import {
   createAuthUser,
   createUserDocFromAuth,
   getCurrentUser,
   signInUserWithEmailAndPassword,
   signInWithGooglePopup,
   signOutUser,
} from "../../utils/firebase/firebase.utils";
import { emailSignUpFail, emailSignUpSuccess, signInFail, signInSuccess, singOutFail, singOutSuccess } from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";

export function* signInWithGoogle() {
   try {
      const { user } = yield call(signInWithGooglePopup);
      yield call(getSnapShotFromUserAuth, user);
   } catch (error) {
      yield put(signInFail(error));
   }
}

export function* signInWithEmail({ payload: { email, password } }) {
   try {
      const { user } = yield call(
         signInUserWithEmailAndPassword,
         email,
         password
      );
      yield call(getSnapShotFromUserAuth, user);
   } catch (error) {
      yield put(signInFail(error));
   }
}

export function* signUpWithEmail({payload: {email, password, additionalInformation}}) {
   try {
      const {user} = yield call(createAuthUser, email, password);
      yield put(emailSignUpSuccess(user, additionalInformation));
   } catch (error) {
      yield put(emailSignUpFail(error));
   }
}

export function* signInAfterSignUp({payload: {user, additionalInformation}}) {
   try {
      yield call(getSnapShotFromUserAuth, user, additionalInformation)
   } catch (error) {
      yield put(signInFail(error))
   }
}

export function* signOut() {
   try {
      signOutUser()
      yield put(singOutSuccess())
   } catch (error) {
      yield put(singOutFail(error));
   }
}

export function* getSnapShotFromUserAuth(userAuth, additionalInformation = {}) {
   try {
      const userSnapshot = yield call(
         createUserDocFromAuth,
         userAuth,
         additionalInformation
      );
      yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
   } catch (error) {
      yield put(signInFail(error));
   }
}

export function* isUserAuthenticated() {
   try {
      const userAuth = yield call(getCurrentUser);
      if (!userAuth) return;
      yield put(getSnapShotFromUserAuth, userAuth);
   } catch (error) {
      yield put(signInFail(error));
   }
}

export function* onCheckUserSession() {
   yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
   yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignOutStart() {
   yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onEmailSignUpSuccess() {
   yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignInWithEmailStart() {
   yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpWithEmailStart() {
   yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, signUpWithEmail);
}

export function* userSaga() {
   yield all([
      call(onCheckUserSession),
      call(onGoogleSignInStart),
      call(onSignInWithEmailStart),
      call(onSignUpWithEmailStart),
      call(onEmailSignUpSuccess),
      call(onSignOutStart),
   ]);
}
