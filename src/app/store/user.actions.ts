import { Action } from '@ngrx/store';

// Define Action Types
export const SET_USER = '[User] Set';
export const CLEAR_USER = '[User] Clear';

// Define Action Classes
export class SetUser implements Action {
  readonly type = SET_USER;
  constructor(public payload: string) {}
}

export class ClearUser implements Action {
  readonly type = CLEAR_USER;
}

// Export Action Types
export type UserActions = SetUser | ClearUser;
