// src/app/store/reducers/index.ts
import { ActionReducerMap, createSelector } from '@ngrx/store';
import { UserActions } from '../store/user.actions';
import { userReducer, UserState } from '../store/user.reducer';

export interface State {
  user: UserState;
  // ... other state slices
}

export const reducers: ActionReducerMap<State, UserActions> = {
  // <--- Specify UserActions here
  user: userReducer,
  // ... other reducers
};

export const selectUserState = (state: State) => state.user; // Selector for the UserState slice
export const selectUser = createSelector(
  selectUserState,
  (userState) => userState.user // Extract the 'user' property from UserState
);

export const metaReducers = [];
