import { createSelector } from '@ngrx/store';
import { UserActions, SET_USER, CLEAR_USER } from './user.actions';

// Define Initial State
export interface UserState {
  user: string;
}

const initialState: UserState = {
  user: '',
};

// Reducer Function
export function userReducer(
  state = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case CLEAR_USER:
      return {
        ...state,
        user: '',
      };

    default:
      return state;
  }
}
