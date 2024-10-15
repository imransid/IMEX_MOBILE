import type { RootState } from "../../root-reducer";

export const loginSelector = {
  loginFetchStatus: (state: RootState) => state.login?.loginFetchStatus,
  loginError: (state: RootState) => state.login?.loginError,
  loginResponse: (state: RootState) => state.login?.loginResponse,
  loginStatus: (state: RootState) => state.login?.loginStatus,
  isLoading: (state: RootState) => state.login?.isLoading,
  user: (state: RootState) => state.login?.user,
};
