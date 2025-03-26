import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from '../../store/user.reducer';
import * as UserActions from '../../store/user.actions';
import { AsyncPipe } from '@angular/common';
import { selectUser } from '../../reducers';
import { Router, RouterLink } from '@angular/router';

// Define the type of your root state
interface AppState {
  user: UserState;
}

@Component({
  selector: 'app-ngrx-child',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './ngrx-child.component.html',
  styleUrl: './ngrx-child.component.css',
})
export class NgrxChildComponent {
  user$: Observable<string>;
  @Input() selectedUser: any;

  constructor(private store: Store<AppState>, private router: Router) {
    this.user$ = this.store.select(selectUser);
    const navigation = this.router.getCurrentNavigation();
    this.selectedUser = navigation?.extras?.state?.['selectedUser'];
  }

  setUser(user: string) {
    this.store.dispatch(new UserActions.SetUser(user));
  }

  setNormalUser(user: string) {
    this.selectedUser = user;
  }
}
