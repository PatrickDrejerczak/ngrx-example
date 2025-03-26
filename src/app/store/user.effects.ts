import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  changeBackgroundColor$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.SET_USER),
        tap(() => {
          const randomColor = this.getRandomColor();
          document.body.style.backgroundColor = randomColor;
        })
      ),
    { dispatch: false } // We don't dispatch any new actions from this effect
  );

  constructor(private actions$: Actions) {}

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
