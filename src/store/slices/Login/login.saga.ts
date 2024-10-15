import { authService } from '../../services/auth/auth.service';
import { LoginResponse } from '../../services/auth/auth.service.types';
import { Response } from '../../services/type';
import { call, put, takeLatest } from 'redux-saga/effects';
import { loginActions } from './login.slice';
import { LoginActionType } from './login.types';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to store token securely using AsyncStorage
const setToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('authToken', token);
  } catch (error) {
    console.error('Failed to save the token to storage:', error);
  }
};

// Generator function with proper type annotations
function* loginSaga(
  action: LoginActionType
): Generator<any, void, Response<LoginResponse>> {
  try {
    // Call the login API using authService
    const response: Response<LoginResponse> = yield call(
      authService.login,
      action.payload.request
    );

    // Check for missing token or data in the response
    if (!response?.data || !response?.data?.login?.token) {
      const message =
        response?.errors?.[0]?.extensions?.originalError?.message ||
        'Login failed. Please try again.';
      throw new Error(message);
    }

    // Store the token using AsyncStorage
    yield call(setToken, response.data.login.token);

    // Dispatch login success action
    yield put(
      loginActions.loginSuccess({
        response: response.data,
      })
    );
  } catch (error: any) {
    console.error('Login error:', error);

    // Dispatch login failure action with an error message
    yield put(
      loginActions.loginFailure({ error: error.message || 'Login failed' })
    );
  }
}

// Watcher saga to handle login actions
export function* loginWatcherSaga(): Generator {
  yield takeLatest(loginActions.login.type, loginSaga);
}
