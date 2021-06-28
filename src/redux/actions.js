import { put, takeLatest } from '@redux-saga/core/effects';
import { SIGNUP } from './actionTypes';

function* signupRequest(action) {
  try {
    const {payload} = action;
    yield put({ type: SIGNUP, payload: { result: payload, userEmail: "test@gmail.com", userPassword: "password"} })
  }catch(error){
  }
}
export function* watchSignup() {
  yield takeLatest(SIGNUP, signupRequest)
} 