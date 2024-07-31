import { type XendTableGraphData } from '@/models/endTableCheck';

// The users global state
export interface UsersStateType {
  data: XendTableGraphData;
  isLoading: boolean;
  errors: string;
  loginStatus: boolean;
}
