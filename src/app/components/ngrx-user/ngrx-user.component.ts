import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from '../../store/user.reducer';
import * as UserActions from '../../store/user.actions';
import { AsyncPipe } from '@angular/common';
import { selectUser } from '../../reducers';
import { NavigationExtras, Router, RouterLink } from '@angular/router';

// Define the type of your root state
interface AppState {
  user: UserState;
}

@Component({
  selector: 'app-ngrx-user',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './ngrx-user.component.html',
  styleUrl: './ngrx-user.component.css',
})
export class NgrxUserComponent {
  user$: Observable<string>;
  selectedUser: string = '';

  constructor(private store: Store<AppState>, private router: Router) {
    this.user$ = this.store.select(selectUser);
  }

  setUser(user: string) {
    this.store.dispatch(new UserActions.SetUser(user));
  }

  setNormalUser(user: string) {
    this.selectedUser = user;
  }

  navigateToDestinationWithState() {
    const navigationExtras: NavigationExtras = {
      state: { selectedUser: this.selectedUser },
    };
    this.router.navigate(['/child'], navigationExtras);
  }
}
